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
RESEND_API_KEY=
CONTACT_TO_EMAIL=
BOOKING_TO_EMAIL=
TRADE_TO_EMAIL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_INSTAGRAM_HANDLE=ccandco.aesthetics
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
```

Do not expose `RESEND_API_KEY` or recipient emails to the frontend. Only variables prefixed with `NEXT_PUBLIC_` are browser-visible.

## Resend Setup

1. Create a Resend account and verify a sending domain.
2. Add the API key to `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL`, `BOOKING_TO_EMAIL` and `TRADE_TO_EMAIL`.
4. Update the `fromEmail` value in `lib/email.ts` after a verified domain is available. The current value uses Resend's onboarding sender for development.

The API routes are:

- `/api/booking`
- `/api/contact`
- `/api/trade`

Each route validates with Zod, includes a honeypot field and returns explicit success or error messages.

## Updating Content

Most owner-editable content lives in central files:

- `lib/site.ts`: business name, address, hours, Instagram, navigation, policy highlights and core copy.
- `lib/services.ts`: services, prices, durations, benefits, aftercare, FAQs and service page slugs.
- `lib/testimonials.ts`: reviews and testimonial cards.

To update pricing, edit the `startingPrice` field for each service in `lib/services.ts`.

## Images

Existing CC & CO. assets were copied to `public/images/` with stable names:

- `logo-reference.jpg`
- `price-list-reference.jpg`
- `aftercare-reference.jpg`
- `booking-reference.jpg`
- `policy-reference.jpg`

Replace these files with final studio photography when available, keeping the same filenames to avoid code changes. Use descriptive alt text in `lib/services.ts` and page components if the image content changes.

## Booking Link

Set `NEXT_PUBLIC_BOOKING_URL` to a third-party booking URL to show the “Book Instantly” CTA on the Book Now page. The booking request form remains available as a fallback.

## Google Maps

Set `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` to the Google Maps embed URL for the studio. Until configured, the site displays a designed placeholder.

## Instagram Feed

The homepage uses a polished fallback image grid and links to `@ccandco.aesthetics`. To replace this with a live feed, add a server-side Instagram integration and store any API token in a non-public environment variable.

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add all environment variables in Vercel Project Settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Deploy.

Recommended production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## SEO

The site includes page metadata, Open Graph, Twitter card metadata, `/sitemap.xml`, `/robots.txt` and `BeautySalon` / `LocalBusiness` JSON-LD. Local SEO keywords are configured in `lib/site.ts`.
