# CC & CO. Website

Production-ready Next.js website for CC & CO., a boutique beauty studio in Elwood, Melbourne.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-inspired local UI primitives
- Framer Motion
- React Hook Form
- Zod
- Resend
- Next.js metadata API, sitemap, robots and JSON-LD

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you have.

```bash
RESEND_API_KEY=*** (configured on Vercel + .env.local)
RESEND_FROM_EMAIL="CC & CO. Website <cassandra@ccandco.beauty>"
CONTACT_TO_EMAIL=cassandra@ccandco.beauty
BOOKING_TO_EMAIL=cassandra@ccandco.beauty
TRADE_TO_EMAIL=cassandra@ccandco.beauty
NEXT_PUBLIC_SITE_URL=https://ccandcoaesthetics.com
GOOGLE_SITE_VERIFICATION=*** (configured)
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=*** (live Google Maps embed configured)
NEXT_PUBLIC_POSTHOG_KEY=*** (configured)
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
NEXT_PUBLIC_POSTHOG_DEV_ENABLED=false
INSTAGRAM_HIGHLIGHTS_API_URL=
INSTAGRAM_HIGHLIGHTS_API_KEY=
INSTAGRAM_HIGHLIGHTS_API_KEY_HEADER=Authorization
```

Do not expose `RESEND_API_KEY` or recipient emails to the frontend. Only variables prefixed with `NEXT_PUBLIC_` are browser-visible. `GOOGLE_SITE_VERIFICATION` is rendered as the Google Search Console verification meta tag when present.

## Email (Resend)

**Configured and active.** Contact, booking, and trade forms send real emails using Resend (set on Vercel production/preview and in `.env.local`).

The sender uses the verified Resend domain `ccandco.beauty` via `RESEND_FROM_EMAIL`.

The API routes are:

- `/api/booking`
- `/api/contact`
- `/api/trade`

Each route validates with Zod, includes a honeypot field and returns explicit success or error messages.

## Analytics (PostHog)

PostHog is initialized through `instrumentation-client.ts` using `NEXT_PUBLIC_POSTHOG_KEY` and the US PostHog host. `next.config.ts` proxies `/ingest` requests to PostHog so pageview and session analytics are less likely to be blocked by browser extensions.

PostHog is disabled by default in local development to keep invalid or placeholder keys from creating noisy 401s in the browser console. Set `NEXT_PUBLIC_POSTHOG_DEV_ENABLED=true` in `.env.local` only when intentionally testing analytics against a valid PostHog project key.

## Updating Content

Most owner-editable content lives in central files:

- `lib/site.ts`: business name, address, hours, Instagram, navigation, policy highlights and core copy.
- `lib/services.ts`: services, prices, durations, benefits, aftercare, FAQs and service page slugs.
- `lib/testimonials.ts`: reviews and testimonial cards.

To update pricing, edit the `startingPrice` field for each service in `lib/services.ts`.

## Images

Existing CC & CO. assets are stored in `public/images/`:

- `Lashes 1.png`
- `eyelashes.png`
- `hybrid-lash-extensions-treatment.png`
- `new1.png`
- `new2.png`
- `cc-and-co-lash-treatment-editorial.jpg`
- `cc-and-co-studio-experience.jpg`
- `cc-and-co-hero-video-poster.jpg`
- `Brows and lashes.png`
- `Brows.png`
- `whitening.png`
- `consultation .png`
- `logo-reference.svg`
- `prices.png`
- `aftercare.png`
- `Bookings.png`

The homepage hero uses `public/videos/cc-and-co-hero-video.mp4` with `cc-and-co-hero-video-poster.jpg` as its poster.

Replace these files with final studio photography when available, keeping the same filenames to avoid code changes. Use descriptive alt text in `lib/services.ts` and page components if the image content changes.

## Booking Link

Set `NEXT_PUBLIC_BOOKING_URL` to a third-party booking URL to show the “Book Instantly” CTA on the Book Now page. The booking request form remains available as a fallback.

## Google Maps

Set `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` to the Google Maps embed URL for the studio. Until configured, the site displays a designed placeholder.

## Instagram Feed

The homepage uses an interactive fallback highlight grid and links to `@ccandcoaesthetics`. Configure a third-party highlights provider with `INSTAGRAM_HIGHLIGHTS_API_URL` and `INSTAGRAM_HIGHLIGHTS_API_KEY` to play live highlight media through `/api/instagram/highlights`. Keep provider tokens private; only `NEXT_PUBLIC_INSTAGRAM_HANDLE` is browser-visible.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add all environment variables in Vercel Project Settings.
4. Set `NEXT_PUBLIC_SITE_URL` to `https://ccandcoaesthetics.com`.
5. Deploy.

Recommended production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## SEO

The site includes page metadata, Open Graph, Twitter card metadata, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and `BeautySalon` / `LocalBusiness` / `Service` / `FAQPage` JSON-LD. Local SEO keywords and canonical domain settings are configured in `lib/site.ts`.

Google Search Console setup after production deploy:

1. Add the domain property for `ccandcoaesthetics.com` in Google Search Console.
2. Prefer DNS verification if you control DNS. If using HTML meta verification, set `GOOGLE_SITE_VERIFICATION` to the token Google provides and redeploy.
3. Submit `https://ccandcoaesthetics.com/sitemap.xml` in Search Console.
4. Test rich results for key pages with <https://search.google.com/test/rich-results>.
5. Confirm these URLs return `200`: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/services`, `/book`, `/contact`.
