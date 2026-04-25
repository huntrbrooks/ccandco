# Current Tracking Audit

**Generated:** 2026-04-26

## Findings

- PostHog is installed in `package.json`.
- PostHog is initialized in `instrumentation-client.ts`.
- PostHog ingest proxy rewrites are configured in `next.config.ts`.
- No custom `posthog.capture`, `posthog.identify`, `posthog.group`, or `usePostHog` calls were found.
- Form submissions are handled client-side by `BookingForm`, `ContactForm`, and `TradeForm`, then sent to API routes using `fetch`.
- Email delivery is handled by API routes and `lib/email.ts`.

## Current Coverage

- Pageview/session behavior is covered by PostHog defaults.
- Explicit business conversion events are not covered.

## Recommended Baseline

Add typed client-side events for successful booking, contact, and trade submissions, plus Instagram highlight opens. Keep the event payloads small and non-sensitive.
