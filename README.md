# GRENCAPE Site

One-page business card site for grencape.xyz built with Vite, React, TypeScript, Tailwind CSS, and a custom Canvas background.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Environment variables

Create a `.env.local` (not committed) or set variables in your hosting provider:

```
VITE_HF_URL=
VITE_LINKEDIN_URL=
VITE_FORMSPREE_URL=
VITE_CORP_EMAIL=hello@grencape.xyz
```

If `VITE_FORMSPREE_URL` is empty, the contact form falls back to `mailto:` using `VITE_CORP_EMAIL`.

## Cloudflare Pages deployment

- Build command: `npm run build`
- Output directory: `dist`
- Node version: latest LTS recommended

### Set environment variables

Cloudflare Pages → Project → Settings → Environment Variables:
- Add the `VITE_*` variables from `.env.example`
- Trigger a new deployment after updating variables

### Custom domain (grencape.xyz)

1. Cloudflare Pages → Custom Domains → Add `grencape.xyz` (and optionally `www.grencape.xyz`).
2. Follow Cloudflare DNS instructions to add the required CNAME/AAAA records.
3. Wait for SSL issuance to complete.

## Security

No secrets are stored in this repo. Keep any credentials in Cloudflare Pages environment variables.
