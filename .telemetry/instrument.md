# PostHog Instrumentation Guide

**Generated:** 2026-04-26  
**Target SDK:** `posthog-js` browser SDK  
**Current setup:** `instrumentation-client.ts` initializes PostHog and `next.config.ts` proxies `/ingest` to PostHog.

## Architecture

Use browser-side PostHog tracking for the first implementation. This product has no authenticated user model, account hierarchy, database, or durable lead records, so backend delivery and PostHog groups are not needed yet.

Create a single typed wrapper in the application code and import it from client components. Components should call descriptive wrapper functions, not `posthog.capture()` directly.

## Environment

PostHog is already configured through:

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

The active implementation uses:

- `api_host: "/ingest"`
- `ui_host: "https://us.posthog.com"`
- `defaults: "2026-01-30"`
- `capture_exceptions: true`

## Identify

Do not call `posthog.identify()` for the current site. Visitors are anonymous and there is no durable customer ID. If a customer portal or persisted lead ID is added later, identify with that stable internal ID only.

Template for a future authenticated feature:

```typescript
import posthog from "posthog-js";

posthog.identify("customer_123", {
  role: "client",
});
```

Never use email addresses as IDs.

## Group

Do not call `posthog.group()` for the current site. There are no accounts, studios, organizations, workspaces, or other group entities in the product model.

If a multi-location admin system is introduced later, group analytics can use a `studio` group:

```typescript
import posthog from "posthog-js";

posthog.group("studio", "studio_elwood", {
  name: "CC & CO. Elwood",
});
```

## Track

Use `posthog.capture(eventName, properties)` from the browser. The wrapper should:

- no-op when running outside the browser
- no-op if PostHog failed to load
- keep event names centralized
- avoid PII and free text

Representative examples:

```typescript
import posthog from "posthog-js";

posthog.capture("booking_request.submitted", {
  preferred_service_slug: "lash-lift",
  client_type: "New client",
  has_preferred_date: true,
  has_preferred_time: false,
  source: "Book Now page",
});

posthog.capture("instagram_highlight.opened", {
  highlight_id: "studio",
  highlight_title: "Studio",
  provider_configured: false,
});
```

## Privacy

Allowed event properties are limited to non-sensitive metadata in `.telemetry/tracking-plan.yaml`. Do not send:

- names
- emails
- phone numbers
- business names
- form notes
- message body text
- free-text enquiry content

## Verification

1. Run the site locally with `NEXT_PUBLIC_POSTHOG_KEY` configured.
2. Submit each form with test data.
3. Open an Instagram highlight.
4. In PostHog, check **Activity / Live Events** for:
   - `booking_request.submitted`
   - `contact_form.submitted`
   - `trade_enquiry.submitted`
   - `instagram_highlight.opened`
5. Confirm properties contain only approved metadata.

Expected delivery latency is usually seconds.

## Rollout

Phase 1 should ship only conversion and engagement events:

- `booking_request.submitted`
- `contact_form.submitted`
- `trade_enquiry.submitted`
- `instagram_highlight.opened`

Phase 2 can add CTA click tracking after confirming Phase 1 delivery quality.
