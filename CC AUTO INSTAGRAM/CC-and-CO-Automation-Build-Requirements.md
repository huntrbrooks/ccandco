# CC & CO. Automation Build Requirements

Date: 26 April 2026  
Project: CC & CO. Aesthetics website and Instagram content machine  
Repository reviewed: `/Users/gerardgrenville/cc&co`  
Briefing folder reviewed: `/Users/gerardgrenville/cc&co/CC AUTO INSTAGRAM`

## Executive Summary

The repository already contains a working production-ready Next.js website for CC & CO. Aesthetics. It has service pages, booking/contact/trade forms, Resend email routes, PostHog tracking hooks, SEO metadata, sitemap, robots, `llms.txt`, JSON-LD structured data, and an Instagram highlights provider abstraction.

The `CC AUTO INSTAGRAM` folder contains planning documents for a larger content operations system. It does not currently contain a standalone automation app. The next realistic build is not another public page first. It is an owner-controlled content operations layer that turns the existing brand guide into a repeatable workflow for planning, drafting, approving, scheduling, and measuring Instagram and local marketing content.

I reached the first hard blocker: external accounts, API credentials, business approvals, and brand assets are required before the automation can safely publish, schedule, sync reviews, pull Instagram analytics, or send content into third-party tools.

## Current App Status

The current app is healthy.

- `npm run typecheck` passes.
- `npm run lint` passes.
- `npm run build` passes.
- Next.js builds 24 app routes successfully.
- API routes exist for booking, contact, trade enquiries, and Instagram highlights.
- The site uses central source files for business content, services, testimonials, SEO, validation, tracking, and email.

Important current routes:

- `/`
- `/services`
- `/services/[slug]`
- `/book`
- `/contact`
- `/trade`
- `/reviews`
- `/privacy`
- `/terms`
- `/api/booking`
- `/api/contact`
- `/api/trade`
- `/api/instagram/highlights`
- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`

## What Can Be Built Without More Input

These are safe, high-confidence tasks that do not need new accounts or business decisions:

1. Keep the public website stable and production-ready.
2. Create this requirements PDF.
3. Add documentation for the automation architecture.
4. Improve local developer guardrails, such as ignored research/cache folders.
5. Add tests around pure utilities and validation schemas.
6. Add safer server-side handling around form route failures.
7. Add a local-only content planning script that generates draft ideas from the existing guide, but does not publish or call third-party APIs.
8. Add typed configuration documentation for all environment variables.
9. Add a content QA checklist route or static internal page, if you want one.
10. Add more structured events to the existing PostHog wrapper once final analytics goals are confirmed.

I should not safely build auto-posting, live analytics sync, customer messaging, review scraping, or booking-system sync without your explicit accounts, permissions, and operating rules.

## What I Need From You

### Business Facts

- Confirm the exact trading name to use everywhere.
- Confirm the legal name.
- Confirm the canonical website domain.
- Confirm the studio address. The current app uses `146 Glen Huntly Road, Elwood 3184, Victoria`.
- Confirm opening hours.
- Confirm the booking process.
- Confirm whether there is an external booking system.
- Confirm the final booking URL.
- Confirm the preferred public phone number.
- Confirm the preferred public email address.
- Confirm whether the business uses Australian English spelling everywhere.

### Service Information

For every service, I need:

- Service name.
- Category.
- Duration.
- Starting price.
- Full description.
- Who it is for.
- Benefits.
- What to expect.
- Aftercare.
- FAQs.
- Whether the service is currently live or coming later.
- Any legal, health, dental, or cosmetic wording that must be avoided.

Current services in the app:

- Classic Lash Extensions.
- Hybrid Lash Extensions.
- Volume Lash Extensions.
- Lash Lift and Tint.
- Professional Teeth Whitening.
- Brow Sculpting.
- Brow Tint.
- Beauty Add-On Consultation.

### Brand Assets

- Final logo files.
- Brand font preferences, if different from the current Inter and Cormorant Garamond setup.
- Final studio photography.
- Approved lash, brow, whitening, and consultation images.
- Hero video final file and poster image.
- Instagram highlight cover artwork.
- Canva brand kit, if available.
- Before/after images, only where client consent is documented.
- Approved client testimonials.
- Any existing top-performing captions or reels.

### Publishing Rules

- Whether automation may draft only, or draft and schedule, or draft and publish.
- Who approves content.
- What approval channel to use: Airtable, Notion, Google Sheets, email, Slack, or another tool.
- Whether any content can ever auto-publish without human approval.
- How far ahead content should be planned.
- Which days and times content should publish.
- Whether DMs and comments should be monitored by automation.
- Whether review requests can be sent automatically.
- Whether appointment/customer data may be used for reminders.

### Compliance And Consent

- Confirm that client images are approved before marketing use.
- Confirm that reviews are real and approved for marketing use.
- Confirm whether email/SMS marketing consent exists.
- Confirm privacy policy wording for analytics, form handling, and any future marketing automation.
- Confirm whether the studio wants dental/medical disclaimers around whitening.
- Confirm whether teeth whitening claims have been reviewed by the business owner or a qualified adviser.

## API Keys And Environment Variables Needed

### Already Referenced By The App

These are already represented in `.env.example`:

| Variable | Purpose | Required For |
| --- | --- | --- |
| `RESEND_API_KEY` | Sends booking, contact, and trade emails. | Website forms |
| `RESEND_FROM_EMAIL` | Verified sender identity. | Website forms |
| `CONTACT_TO_EMAIL` | Recipient for contact form. | Contact route |
| `BOOKING_TO_EMAIL` | Recipient for booking requests. | Booking route |
| `TRADE_TO_EMAIL` | Recipient for trade enquiries. | Trade route |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO, metadata, sitemap, and JSON-LD. | Production SEO |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token. | Search Console |
| `NEXT_PUBLIC_BOOKING_URL` | External booking URL shown on the Book page. | Instant booking CTA |
| `NEXT_PUBLIC_INSTAGRAM_HANDLE` | Public Instagram handle. | Instagram links |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Embedded Google Map URL. | Location section |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog browser analytics key. | Product analytics |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingest host. | Product analytics |
| `NEXT_PUBLIC_POSTHOG_DEV_ENABLED` | Enables local PostHog testing. | Developer testing |
| `INSTAGRAM_HIGHLIGHTS_API_URL` | Server-side provider URL for Instagram highlights. | Live highlight media |
| `INSTAGRAM_HIGHLIGHTS_API_KEY` | Private provider API key. | Live highlight media |
| `INSTAGRAM_HIGHLIGHTS_API_KEY_HEADER` | Header name for the provider key. | Live highlight media |

### Needed For The Full Content Machine

| Key Or Credential | Needed When | Notes |
| --- | --- | --- |
| Meta Developer App credentials | Publishing or reading Instagram data via official APIs. | Requires an Instagram professional account and app setup. |
| Instagram User access token or Facebook Page access token | Publishing media through Meta APIs. | Depends on whether you use Business Login for Instagram or Facebook Login for Business. |
| Meta permissions | Publishing and analytics. | Content publishing requires permissions such as `instagram_business_content_publish` or `instagram_content_publish`, depending on login type. |
| n8n credentials | Running scheduled automation workflows. | Cloud or self-hosted. |
| Anthropic API key | Claude-based generation in n8n or scripts. | Needed if automation calls Claude directly. |
| OpenAI API key | Optional generation, image analysis, embeddings, or alternate models. | Only needed if we choose OpenAI for part of the workflow. |
| Google OAuth credentials | Google Drive, Docs, Sheets, Gmail, or Calendar integrations. | Needed for Google approval/storage workflows. |
| Airtable personal access token | Airtable approval database. | Needed if Airtable is the content source of truth. |
| Notion integration token | Notion content calendar. | Needed only if Notion is chosen. |
| Canva credentials or connected account | Designing and scheduling through Canva. | Canva's Content Planner is mainly account-based; API access depends on available Canva developer features and plan. |
| Slack bot token | Slack approval notifications. | Optional. |
| Google Business Profile API access | Posting or reading GBP data. | Optional and often more involved than manual GBP posts. |
| Booking platform API key | Appointment sync and reminders. | Depends on Fresha, Timely, Square, Acuity, Calendly, or another booking platform. |
| SMS provider key | SMS reminders. | Optional. Common choices include Twilio or MessageBird. |
| Stripe key | Deposits, paid consultations, or products. | Not currently needed by the app. |
| Sentry DSN | Error monitoring. | Optional but recommended for production debugging. |

## Plugins And Tools To Install

### Cursor Plugins

Recommended for this repo:

- Vercel plugin for deployment visibility.
- GitHub plugin for PRs and repository workflow.
- PostHog plugin for analytics investigation.
- Resend plugin for email delivery debugging.
- Browser automation plugin for visual QA.
- Context7 or docs plugin for current library documentation.
- Sentry plugin if error monitoring is added.
- Figma plugin if designs are managed in Figma.
- Notion, Airtable, Google, or Zapier/n8n-related plugins depending on the chosen approval database.

### Project Dependencies

Already installed in the app:

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- React Hook Form.
- Zod.
- Resend.
- PostHog.
- Lucide React.

Potential future dependencies:

- Test runner, such as Vitest, for utility and validation tests.
- Playwright for end-to-end form and page checks.
- Sentry SDK for production error monitoring.
- SDK for the chosen booking provider.
- SDK for the chosen content storage provider, such as Airtable or Notion.
- Meta Graph API helper, if official publishing is implemented directly.

### External Desktop Or Web Tools

- Google Search Console.
- Google Business Profile.
- Meta Business Suite.
- Meta for Developers.
- Instagram professional account.
- Canva.
- n8n.
- NotebookLM.
- Airtable, Notion, or Google Sheets for approvals.
- Vercel.
- Resend.
- PostHog.
- GitHub.

## Subscriptions And Programmes To Sign Up For

### Minimum Current Website Stack

| Service | Recommended Plan | Why |
| --- | --- | --- |
| Vercel | Hobby for testing, Pro for commercial production/team use. | Hosts the Next.js site and manages env vars/deployments. |
| Resend | Free initially; Pro if email volume grows. | Current forms send via Resend. Free tier is listed at 3,000 emails/month and 100/day; Pro is listed at $20/month for 50,000/month. |
| PostHog | Free initially. | Current app already initializes PostHog. Free tier includes product analytics events, session recordings, and feature flag requests before usage-based billing. |
| Google Search Console | Free. | Submit sitemap and monitor SEO. |
| Google Business Profile | Free. | Local business discovery and reviews. |
| GitHub | Free or Team. | Source control and deployment integration. |

### Content Machine Stack

| Service | Recommended Plan | Why |
| --- | --- | --- |
| n8n | Starter/Pro cloud, or self-hosted if you want lower execution costs and more control. | Scheduled orchestration and approval workflows. Official n8n pricing is execution-based; Starter is listed at $20/month billed annually and Pro at $50/month billed annually. |
| NotebookLM | Free to start; Plus/Pro if source limits or workflow limits become restrictive. | Source-grounded brand/content research. |
| Canva | Pro or Teams. | Design templates, brand kit, and Content Planner for social scheduling. |
| Airtable | Free to prototype; Team or higher if approval workflow grows. | Structured approval queue and content calendar. |
| Anthropic API | Pay-as-you-go. | Claude generation from n8n or scripts. |
| OpenAI API | Optional pay-as-you-go. | Alternative model calls, embeddings, or image understanding if needed. |
| Meta Developer | Free, but requires app review for some permissions. | Official Instagram publishing and insights. |
| Sentry | Free to start. | Production error visibility if added. |
| Slack | Optional. | Approval notifications. |
| Twilio or SMS provider | Optional. | SMS reminders if legally approved. |

### Booking And Commerce Options

The app currently supports either:

- An external instant booking link through `NEXT_PUBLIC_BOOKING_URL`.
- A fallback booking request form that emails the studio.

To build booking automation, choose one booking platform first. Possible categories:

- Beauty booking platform: Fresha, Timely, or similar.
- General scheduling: Calendly or Acuity.
- Payments/deposits: Stripe.
- POS/customer records: Square, if the studio uses it.

I need your chosen platform before building sync, deposits, automated reminders, cancellation workflows, or availability-aware content.

## Agents To Create

These are the recommended long-running agent roles for the content machine. They should not all publish directly. Most should create drafts or checks for a human approval queue.

### 1. Content Operations Supervisor

Role:

- Runs the weekly content workflow.
- Delegates briefs to specialist agents.
- Checks every output has a status and owner.
- Stops if required source data is missing.

Needs access to:

- Brand guide.
- Content calendar.
- Approval database.
- Current services and prices.
- Upcoming promotions or availability, if supplied.

### 2. Brand Guardrail Agent

Role:

- Reviews all generated content against CC & CO. tone and claims rules.
- Rejects unsupported medical, dental, pricing, availability, or result claims.
- Flags anything that needs human confirmation.

Needs access to:

- Brand guide.
- Service list.
- Prohibited claims.
- Approved testimonials and assets.

### 3. Instagram Caption Agent

Role:

- Drafts captions.
- Creates alternate hooks.
- Uses Australian English.
- Keeps CTAs soft and clear.

Needs access to:

- Weekly content brief.
- Service focus.
- Brand voice.
- Content pillar.

### 4. Reel Script Agent

Role:

- Creates short-form reel scripts.
- Suggests shot lists, overlays, and CTAs.
- Flags where real footage or client consent is required.

Needs access to:

- Approved visual asset list.
- Weekly content brief.
- Studio content rules.

### 5. Carousel Agent

Role:

- Creates slide-by-slide carousel copy.
- Keeps text minimal.
- Provides Canva design direction.

Needs access to:

- Brand palette.
- Typography direction.
- Content pillar.
- Service facts.

### 6. Story And Highlight Agent

Role:

- Creates daily story sequences.
- Recommends sticker prompts.
- Recommends highlight destination.
- Maintains highlight order.

Needs access to:

- Highlight strategy.
- Daily schedule.
- Instagram handle and current highlight list.

### 7. Google Business Profile Agent

Role:

- Drafts weekly GBP updates.
- Keeps wording local but not keyword-stuffed.
- Avoids unsupported claims.

Needs access to:

- Confirmed address.
- Service list.
- Local SEO rules.
- Approved photos.

### 8. Review Repurposing Agent

Role:

- Converts approved reviews into captions, story frames, and quote-card copy.
- Never invents names, services, or outcomes.

Needs access to:

- Approved review source.
- Client consent status.
- Service mapping.

### 9. Aftercare Agent

Role:

- Generates aftercare reminders and posts.
- Keeps advice limited to approved guide content.
- Routes client-specific messages to approval unless explicit consent and policy are in place.

Needs access to:

- Aftercare rules.
- Appointment service, if appointment sync is approved.
- Consent rules.

### 10. Analytics Agent

Role:

- Summarises top posts.
- Identifies content pillars that drive saves, enquiries, clicks, bookings, and profile visits.
- Recommends next month's content mix.

Needs access to:

- Instagram insights.
- PostHog events.
- Booking enquiry counts.
- Google Business Profile metrics, if available.

### 11. SEO And AI Visibility Agent

Role:

- Monitors website metadata, `llms.txt`, sitemap, service pages, and search performance.
- Suggests local content topics.
- Keeps canonical business facts consistent.

Needs access to:

- Website source.
- Search Console data.
- Google Business Profile facts.
- Service list.

### 12. Production QA Agent

Role:

- Runs typecheck, lint, build, and browser smoke tests.
- Checks mobile and desktop routes.
- Checks forms do not fail silently.

Needs access to:

- Repository.
- Vercel preview URLs.
- Test credentials where applicable.

## Recommended n8n Workflows

### Weekly Content Calendar Generator

Trigger:

- Every Sunday at 5:00 PM Melbourne time.

Flow:

1. Read current service list and content guide.
2. Read upcoming promotions or owner notes.
3. Generate weekly content calendar.
4. Run brand guardrail check.
5. Save rows to Airtable, Notion, or Google Sheets.
6. Notify owner for review.

### Daily Content Draft Workflow

Trigger:

- Weekdays at 8:00 AM Melbourne time.

Flow:

1. Read today's approved calendar row.
2. Generate caption options.
3. Generate story frames.
4. Generate reel or visual brief.
5. Run claims check.
6. Send to approval queue.

### Approved Content Scheduler

Trigger:

- When a content row changes to `Approved`.

Flow:

1. Validate assets are attached.
2. Confirm publishing date/time.
3. Send to Canva Content Planner, Meta scheduling, or manual publishing queue.
4. Log scheduled status.

This workflow should not publish live until you explicitly approve auto-publishing rules.

### Review Repurposing Workflow

Trigger:

- New row added to approved reviews table.

Flow:

1. Confirm review is real and approved.
2. Classify service.
3. Generate quote-card text.
4. Generate caption.
5. Generate story sequence.
6. Send to approval queue.

### Monthly Performance Review

Trigger:

- First day of each month.

Flow:

1. Pull Instagram, PostHog, and booking enquiry data.
2. Summarise top-performing content.
3. Identify weak pillars.
4. Recommend next month focus.
5. Create one-page owner report.

## Recommended Data Model

### Content Calendar

Fields:

- `Date`
- `Platform`
- `Format`
- `Content Pillar`
- `Service`
- `Hook`
- `Caption Draft`
- `Story Frames`
- `Reel Script`
- `Visual Brief`
- `CTA`
- `Highlight Destination`
- `Asset Needed`
- `Approval Status`
- `Approver`
- `Scheduled URL`
- `Published URL`
- `Performance Notes`

### Approved Assets

Fields:

- `Asset Name`
- `File`
- `Service`
- `Usage Rights`
- `Client Consent`
- `Alt Text`
- `Approved Channels`
- `Expiry Or Review Date`

### Approved Testimonials

Fields:

- `Review Text`
- `Client Display Name`
- `Service`
- `Source`
- `Marketing Consent`
- `Approved Quote`
- `Date Added`

### Services

Fields:

- `Service Name`
- `Category`
- `Duration`
- `Starting Price`
- `Description`
- `Aftercare`
- `Claims Restrictions`
- `Active Status`

## Build Phases

### Phase 1: Stabilise And Document

Status: mostly complete.

- Verify current app build.
- Keep source content centralised.
- Create this PDF.
- Confirm environment variables.
- Confirm business facts.

### Phase 2: Local Content Generator

Can be built before account setup.

- Add a local script or internal route that turns the brand guide into weekly draft content.
- Store generated drafts as files or local JSON.
- No publishing.
- No external API calls unless you provide a model API key.

### Phase 3: Approval Queue

Requires choosing Airtable, Notion, Google Sheets, or another system.

- Create content calendar schema.
- Create approval statuses.
- Create review checklist.
- Connect n8n to the chosen store.

### Phase 4: n8n Orchestration

Requires n8n account and credentials.

- Weekly planner workflow.
- Daily draft workflow.
- Review repurposing workflow.
- Monthly performance workflow.
- Owner notifications.

### Phase 5: Scheduling Integration

Requires Canva, Meta, or another scheduling platform.

- Send approved posts into scheduling queue.
- Attach assets.
- Log scheduled status.
- Keep manual approval gates.

### Phase 6: Official Instagram API

Requires Meta Developer setup, permissions, professional account, and likely app review depending on scope.

- Connect Instagram professional account.
- Create media containers.
- Publish approved images, carousels, reels, or stories.
- Respect Meta publishing limits.
- Store publishing status and errors.

Official Meta documentation states that Instagram content publishing works for Instagram professional accounts, media must be publicly accessible at publish time, and content publishing permissions depend on login type.

### Phase 7: Analytics Feedback Loop

Requires PostHog plus Instagram/GBP metrics access.

- Track enquiry source.
- Track CTA clicks.
- Track content-driven booking journeys.
- Pull Instagram insights.
- Generate monthly recommendations.

## Current Blockers

I need your input before building further in these areas:

1. Final booking platform and booking URL.
2. Whether content may auto-publish or must remain approval-only.
3. Chosen approval database: Airtable, Notion, Google Sheets, or another tool.
4. n8n cloud versus self-hosting choice.
5. Meta Developer app access.
6. Instagram professional account access.
7. Brand assets and approved images.
8. Approved reviews and consent status.
9. Final address and Google Business Profile details.
10. Which LLM provider should power automation.
11. Whether SMS/email marketing is legally approved and consented.
12. Whether teeth whitening claims need professional/legal review.

## Safety Rules For This Project

- Do not auto-publish without explicit approval.
- Do not invent services, prices, offers, availability, reviews, results, qualifications, or client stories.
- Do not use client images without documented consent.
- Do not make medical or dental claims around teeth whitening.
- Keep owner approval between draft and publishing.
- Keep generated content logged.
- Keep secrets server-side.
- Keep booking/payment/customer data out of AI prompts unless there is a clear privacy basis.
- Run typecheck, lint, and build before production changes.

## Recommended Immediate Next Decisions

Please decide these first:

1. Choose the content approval system: Airtable, Notion, or Google Sheets.
2. Choose n8n Cloud or self-hosted n8n.
3. Confirm whether content should be draft-only, schedule-after-approval, or auto-publish-after-approval.
4. Confirm the booking platform and final booking URL.
5. Provide final brand assets and approved marketing images.
6. Provide Meta/Instagram access path, or confirm that scheduling will happen manually through Canva/Meta Business Suite for now.

Once those are confirmed, the build can move from a production website plus documented content machine into a working automation system.

## Research Sources Used

- n8n pricing: https://n8n.io/pricing/
- Meta Instagram content publishing: https://developers.facebook.com/docs/instagram-platform/content-publishing/
- Meta Instagram Platform overview: https://developers.facebook.com/docs/instagram-platform/overview/
- NotebookLM plans: https://notebooklm.google/plans
- Resend pricing: https://resend.com/pricing
- PostHog pricing: https://posthog.com/pricing
- Vercel pricing: https://vercel.com/pricing
- Airtable pricing: https://airtable.com/pricing
- Canva pricing: https://www.canva.com/en/pricing/
- Canva Content Planner: https://www.canva.com/pro/content-planner/
