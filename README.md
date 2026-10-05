# Muhammad Jahangir Hossain — Portfolio

Personal portfolio of Muhammad Jahangir Hossain, Full-Stack & Front-End Developer — https://devjahangir.com

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for canonical tags, sitemap, robots.txt, Open Graph and JSON-LD. Defaults to `https://devjahangir.com` in production builds and `http://localhost:3000` in development. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console HTML-tag verification code. |
| `RESEND_API_KEY`, `CONTACT_EMAIL` | Contact form email delivery (server-only). |

## Where things live

- `lib/site.ts` — identity (name, role, photo, social profiles) and `SITE_URL`
- `lib/seo.ts` — per-page metadata helper and Person / WebSite / Breadcrumb JSON-LD
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `app/opengraph-image.tsx` — crawl and share metadata
- `data/` — projects, experience and skills shown on the site
