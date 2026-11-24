# Private preview password

The public Ground Lens site is protected by Vercel Routing Middleware. The middleware fails closed until a password is configured, and it checks every route and static asset before serving it.

## Configure

1. In the Vercel dashboard, open the Ground Lens public website project.
2. Open **Settings → Environment Variables**.
3. Add **SITE_GATE_PASSWORD** for **Production** and **Preview**.
4. Use a new, unique password with at least 16 characters. Keep it out of GitHub and share it only with invited reviewers.
5. Save the variable and redeploy the latest deployment.

The same password is shared among preview visitors. Successful logins receive a signed, HTTP-only, Secure, SameSite cookie that expires after seven days. Changing the password invalidates existing sessions.

If the variable is missing or shorter than 16 characters, the middleware returns a closed setup page rather than exposing the site.