const COOKIE_NAME = '__Host-groundlens-private';
const SESSION_SECONDS = 7 * 24 * 60 * 60;
const encoder = new TextEncoder();

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character] as string);
}

function gatePage(returnTo: string, error = '', setupRequired = false): Response {
  const content = setupRequired
    ? '<p class="notice">Private access is being configured. Please check back soon.</p>'
    : `<form action="/__site_access" method="post">
        <input type="hidden" name="returnTo" value="${escapeHtml(returnTo)}" />
        <label for="site-password">Preview password</label>
        <input id="site-password" name="password" type="password" autocomplete="current-password" required autofocus />
        <button type="submit">Continue <span aria-hidden="true">→</span></button>
        ${error ? `<p class="error" role="alert">${escapeHtml(error)}</p>` : ''}
      </form>`;

  return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,nofollow,noarchive" /><title>Ground Lens · Private preview</title>
<style>
  :root{color-scheme:light;--ink:#13221e;--muted:#60716b;--green:#28634f;--mint:#68d7af;--paper:#f5f3ec;--line:#d8ded6}
  *{box-sizing:border-box}body{margin:0;min-height:100vh;background:var(--paper);color:var(--ink);font:16px/1.55 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:grid;place-items:center;padding:24px}
  main{width:min(100%,440px);background:#fffefa;border:1px solid var(--line);border-radius:18px;padding:clamp(28px,7vw,48px);box-shadow:0 20px 55px #19372b12}
  .brand{display:flex;align-items:center;gap:12px;margin-bottom:34px;font-size:18px;font-weight:650;letter-spacing:-.04em}.mark{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:var(--mint);color:#0b2c23;font-weight:750}
  .kicker{color:var(--green);font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(34px,8vw,44px);line-height:1.06;letter-spacing:-.04em;margin:12px 0}p{color:var(--muted);margin:0 0 26px}label{display:block;font-size:14px;font-weight:650;margin-bottom:8px}input{width:100%;min-height:52px;border:1px solid #aebbb3;border-radius:9px;padding:12px 14px;font:inherit;background:white;color:var(--ink)}input:focus{outline:3px solid #68d7af66;border-color:var(--green)}button{width:100%;min-height:54px;margin-top:14px;border:0;border-radius:9px;background:var(--green);color:white;font:inherit;font-weight:700;cursor:pointer}button:hover{background:#1d523f}.error{color:#9e3429;margin:12px 0 0}.notice{padding:14px;background:#f2f4ee;border:1px solid var(--line);border-radius:9px;margin:18px 0 0}.foot{border-top:1px solid var(--line);margin-top:28px;padding-top:18px;color:var(--muted);font-size:13px}
</style></head><body><main><div class="brand"><span class="mark">G</span><span>groundlens</span></div>
<div class="kicker">Private preview · Flint, Michigan</div><h1>Ground Lens is in review.</h1>
<p>Enter the preview password to continue.</p>${content}
<div class="foot">This private preview is for invited reviewers.</div></main></body></html>`, {
    status: setupRequired ? 503 : 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    },
  });
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array): boolean {
  let difference = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    difference |= (left[index] ?? 0) ^ (right[index] ?? 0);
  }
  return difference === 0;
}

async function passwordMatches(candidate: string, expected: string): Promise<boolean> {
  const [candidateHash, expectedHash] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(candidate)),
    crypto.subtle.digest('SHA-256', encoder.encode(expected)),
  ]);
  return constantTimeEqual(new Uint8Array(candidateHash), new Uint8Array(expectedHash));
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value: string): Uint8Array {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function makeSessionToken(password: string, expiresAt: number): Promise<string> {
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(`groundlens-private:${expiresAt}`));
  return `${expiresAt}.${toBase64Url(new Uint8Array(signature))}`;
}

async function validSession(request: Request, password: string): Promise<boolean> {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const cookie = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return false;
  const token = cookie.slice(COOKIE_NAME.length + 1);
  const [expiryText, signatureText, extra] = token.split('.');
  if (!expiryText || !signatureText || extra !== undefined || !/^\d+$/.test(expiryText)) return false;
  const expiresAt = Number(expiryText);
  const now = Math.floor(Date.now() / 1000);
  if (expiresAt <= now || expiresAt > now + SESSION_SECONDS + 60) return false;
  try {
    const expectedToken = await makeSessionToken(password, expiresAt);
    return constantTimeEqual(fromBase64Url(signatureText), fromBase64Url(expectedToken.split('.')[1]));
  } catch {
    return false;
  }
}

function safeReturnPath(value: string | null, requestUrl: URL): string {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return '/';
  try {
    const candidate = new URL(value, requestUrl.origin);
    if (candidate.origin !== requestUrl.origin || candidate.pathname === '/__site_access') return '/';
    return `${candidate.pathname}${candidate.search}${candidate.hash}`;
  } catch {
    return '/';
  }
}

export default async function middleware(request: Request): Promise<Response | undefined> {
  const password = process.env.SITE_GATE_PASSWORD;
  const url = new URL(request.url);
  if (!password || password.length < 16) return gatePage('/', '', true);

  if (url.pathname === '/__site_access') {
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });
    const originHeader = request.headers.get('origin');
    if (originHeader) {
      let origin: URL;
      try {
        origin = new URL(originHeader);
      } catch {
        return new Response('Forbidden', { status: 403, headers: { 'Cache-Control': 'no-store' } });
      }
      const forwardedHost = request.headers.get('x-forwarded-host');
      const requestHost = (forwardedHost ?? request.headers.get('host') ?? url.host).split(',')[0].trim().toLowerCase();
      const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim();
      const requestProtocol = forwardedProtocol ? `${forwardedProtocol.replace(/:$/, '')}:` : url.protocol;
      const sameRequestOrigin = origin.protocol === requestProtocol && origin.host.toLowerCase() === requestHost;
      const groundLensHosts = new Set(['thegroundlens.com', 'www.thegroundlens.com']);
      const allowedGroundLensOrigin = origin.protocol === 'https:' && groundLensHosts.has(origin.hostname.toLowerCase());
      if (!sameRequestOrigin && !allowedGroundLensOrigin) {
        return new Response('Forbidden', { status: 403, headers: { 'Cache-Control': 'no-store' } });
      }
    }
    if (!(request.headers.get('content-type') ?? '').toLowerCase().startsWith('application/x-www-form-urlencoded')) {
      return new Response('Unsupported media type', { status: 415, headers: { 'Cache-Control': 'no-store' } });
    }
    const declaredLength = Number(request.headers.get('content-length') ?? 0);
    if (declaredLength > 4096) return new Response('Request too large', { status: 413, headers: { 'Cache-Control': 'no-store' } });
    const form = new URLSearchParams(await request.text());
    const returnTo = safeReturnPath(form.get('returnTo'), url);
    if (await passwordMatches(form.get('password') ?? '', password)) {
      const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
      const token = await makeSessionToken(password, expiresAt);
      return new Response(null, {
        status: 303,
        headers: {
          Location: returnTo,
          'Set-Cookie': `${COOKIE_NAME}=${token}; Path=/; Max-Age=${SESSION_SECONDS}; Secure; HttpOnly; SameSite=Strict`,
          'Cache-Control': 'private, no-store, max-age=0',
        },
      });
    }
    return gatePage(returnTo, 'That password did not match.');
  }

  if (await validSession(request, password)) return;
  return gatePage(`${url.pathname}${url.search}`);
}
