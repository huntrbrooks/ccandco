# Product: CC & CO. Website

**Last updated:** 2026-04-26  
**Method:** codebase scan + user-confirmed project context

## Product Identity

- **One-liner:** Visitors explore CC & CO.'s boutique beauty services, view studio credibility signals, and submit booking, contact, or trade enquiries for follow-up.
- **Category:** local-service-marketing-site
- **Product type:** B2C with a small B2B/trade enquiry pathway
- **Collaboration:** single-player

## Business Model

- **Monetization:** paid-only offline services
- **Pricing tiers:** Service-level prices are shown in `lib/services.ts`; no online subscription tiers are present.
- **Billing integration:** none detected

## Tech Stack

- **Primary language:** TypeScript
- **Framework:** Next.js App Router
- **Database:** none detected
- **Background jobs:** none detected
- **HTTP client patterns:** browser `fetch`, route handlers, Resend SDK
- **Module organization:** `app/` routes, shared React components in `components/`, site content in `lib/`

## Value Mapping

### Primary Value Action

**Booking request submitted** — A prospective client asks CC & CO. to arrange an appointment. If this drops to zero, the website is not producing business value.

### Core Features

1. **Service discovery** — Visitors browse lash, whitening, brow, and add-on service pages before choosing an enquiry path.
2. **Booking request form** — Visitors submit preferred service, date, time, and client type.
3. **Contact form** — Visitors ask general questions before booking.
4. **Trade enquiry form** — Industry or partnership leads contact the business.
5. **Instagram highlight interaction** — Visitors engage with social proof and studio updates.

### Supporting Features

1. **Homepage hero and media sections** — Establish visual credibility and brand fit.
2. **Testimonials** — Provide confidence signals.
3. **Location and hours** — Help visitors decide whether the studio is suitable.
4. **SEO pages and structured data** — Support discovery through search engines and AI assistants.
5. **Email delivery via Resend** — Sends enquiries to the studio inbox.

## Entity Model

### Users

- **ID format:** anonymous PostHog distinct IDs; no authenticated user IDs exist.
- **Roles:** visitor, prospective client, trade lead
- **Multi-account:** no

### Accounts

- **ID format:** not applicable
- **Hierarchy:** none

## Group Hierarchy

No group hierarchy. This is a public marketing site with anonymous visitor-level tracking only.

| Group Type | Parent | Where Actions Happen |
|------------|--------|---------------------|
| none | none | user/browser session |

**Default event level:** user/browser session  
**Admin actions at:** not applicable

## Current State

- **Existing tracking:** PostHog browser SDK initialized through `instrumentation-client.ts`; no custom events were present before this telemetry baseline.
- **Documentation:** partial; README documents PostHog initialization.
- **Known issues:** No tracking plan source of truth existed before this folder was created.

## Integration Targets

| Destination | Purpose | Priority |
|-------------|---------|----------|
| PostHog | Product analytics, page/session analytics, session replay, form conversion events | primary |

## Codebase Observations

- **Feature areas inferred:** homepage, service discovery, booking, contact, trade, reviews, location, Instagram highlights, SEO support routes.
- **Entity model inferred:** anonymous visitors only; form submissions create business leads but are not persisted as application records.
