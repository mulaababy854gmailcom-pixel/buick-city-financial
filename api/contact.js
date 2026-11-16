import { randomUUID } from 'node:crypto';
import { buildInquiry } from '../src/lib/inquiry.js';

const services = new Set(['origination','seller-financing','processing','servicing','residential']);
const roles = new Set(['Investor / buyer','Property seller','Lender / loan owner','Professional partner','Future homebuyer / homeowner']);
const states = new Set('AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' '));
states.add('Not yet determined');
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const uuidPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const text = (v, max, required=false) => typeof v === 'string' && v.trim().length <= max && (!required || v.trim().length > 0) && !/[\r\n\0]/.test(v);
function valid(data) {
  return data && typeof data === 'object' && !Array.isArray(data) &&
    text(data.name,100,true) && text(data.email,254,true) && emailPattern.test(data.email.trim()) &&
    text(data.organization ?? '',120) && services.has(data.service) &&
    roles.has(data.role) && states.has(data.state) && data.consent === true &&
    typeof (data.website ?? '') === 'string' && (data.website ?? '') === '' &&
    uuidPattern.test(data.requestId ?? '');
}
// A bounded, per-instance fallback. Use Vercel Firewall rate limiting for edge-wide enforcement.
export function createLimiter() {
  const entries = new Map();
  return (key, now=Date.now()) => {
    for (const [ip, value] of entries) if(value.until <= now) entries.delete(ip);
    const current=entries.get(key);
    if(current && current.count >= 5) return false;
    if(current) current.count++;
    else {
      if(entries.size >= 1000) return false;
      entries.set(key,{count:1,until:now+600000});
    }
    return true;
  };
}
const warmLimiter = createLimiter();
export function createHandler({env=process.env, send=globalThis.fetch, limit=warmLimiter}={}) {
  return async function handler(req,res) {
    res.setHeader('Cache-Control','no-store');
    res.setHeader('Content-Type','application/json; charset=utf-8');
    const reply=(status,message,extra={})=>res.status(status).json({message,...extra});
    if(req.method !== 'POST') {res.setHeader('Allow','POST');return reply(405,'Method not allowed.');}
    const allowed=new Set(['https://thegroundlens.com','https://www.thegroundlens.com']);
    if(env.VERCEL_URL) allowed.add('https://'+env.VERCEL_URL);
    if(!allowed.has(req.headers.origin)) return reply(403,'Unable to submit this inquiry.');
    if(!String(req.headers['content-type']||'').toLowerCase().startsWith('application/json')) return reply(415,'Use JSON for this request.');
    if(Number(req.headers['content-length']||0)>4096) return reply(413,'This inquiry is too large.');
    let data=req.body;
    if(typeof data==='string') {if(Buffer.byteLength(data)>4096)return reply(413,'This inquiry is too large.');try{data=JSON.parse(data);}catch{return reply(400,'Check your inquiry details.');}}
    if(Buffer.byteLength(JSON.stringify(data??{}))>4096) return reply(413,'This inquiry is too large.');
    if(!valid(data)) return reply(400,'Please check the required fields and try again.');
    const ip=String(req.headers['x-vercel-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0].trim();
    if(!limit(ip)) return reply(429,'Please wait a few minutes before trying again.');
    if(env.CONTACT_ENABLED!=='true'||!env.RESEND_API_KEY||!emailPattern.test(env.CONTACT_TO_EMAIL||'')||!emailPattern.test(env.CONTACT_FROM_EMAIL||''))
      return reply(503,'We couldn’t send your inquiry. Your details are still here; please try again later.');
    const reference=randomUUID();
    try {
      const response=await send('https://api.resend.com/emails',{
        method:'POST',
        headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':'bcfc-inquiry/'+data.requestId},
        signal:AbortSignal.timeout(12000),
        body:JSON.stringify({
          from:'BCFC Website <'+env.CONTACT_FROM_EMAIL+'>',
          to:[env.CONTACT_TO_EMAIL],
          reply_to:data.email.trim(),
          subject:'BCFC service inquiry',
          text:buildInquiry(data),
        }),
      });
      const result=await response.json().catch(()=>null);
      if(!response.ok||typeof result?.id!=='string') return reply(502,'We couldn’t send your inquiry. Your details are still here; please try again.');
      return reply(200,'Your inquiry has been submitted.',{ok:true,reference});
    } catch {
      return reply(502,'We couldn’t confirm your inquiry was sent. Your details are still here; please try again.');
    }
  };
}
export default createHandler();
