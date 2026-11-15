# Private contact delivery

This branch adds a Vercel server function at /api/contact and a direct Send inquiry form. It is not ready for production until email delivery is configured and verified.

## Private Vercel environment settings

- RESEND_API_KEY: restricted sending key from Resend; never use a VITE_ prefix.
- CONTACT_FROM_EMAIL: a sending address on a verified Resend domain.
- CONTACT_TO_EMAIL: the business mailbox that should receive inquiries. The owner has already specified it in the chat. Do not put it in browser source or this document.
- CONTACT_ENABLED: true only after setup and a delivery test succeed.

Verify the sending domain in Resend using its exact DNS records. Configure Vercel Firewall rate limiting for POST /api/contact before activation; the endpoint also includes a bounded per-instance fallback, origin validation, a honeypot, field and body limits, and idempotency for retries. No attachments or financial records are accepted.

The function returns success only after Resend accepts the email and returns an ID. Acceptance does not guarantee inbox placement. Provider errors and secrets are never returned to the browser, and inquiry payloads are not logged.

To activate: configure private preview settings, redeploy the branch, send one clearly marked test inquiry, verify receipt in the designated mailbox, then apply production settings and merge. API keys, mailbox passwords, and tokens must not be pasted into chat or committed.
