# Current Tracking Implementation

**Generated:** 2026-04-26

## Summary

PostHog is installed and initialized client-side through `instrumentation-client.ts`. The app proxies PostHog ingestion through `/ingest` via `next.config.ts`.

Before this baseline, no custom event constants or `posthog.capture()` calls were found in the codebase.

## Existing PostHog Setup

- Package: `posthog-js`
- Initialization file: `instrumentation-client.ts`
- Public key env var: `NEXT_PUBLIC_POSTHOG_KEY`
- Ingestion host: `/ingest`
- UI host: `https://us.posthog.com`
- Proxy rewrites: `next.config.ts`
- Exception capture: enabled
- Development debug: enabled

## Existing Coverage

PostHog likely captures default browser analytics such as pageviews, pageleave, and autocapture, depending on the active PostHog defaults. No explicit product events exist.

## Constraints

- The app has no authenticated user model. Keep tracking anonymous unless a durable customer account system is introduced.
- The app has no account/group hierarchy. Do not add PostHog group calls.
- Form events must not send PII. Avoid names, emails, phone numbers, free-text notes, and messages.
- Server-side PostHog is not installed. Keep the first implementation browser-side unless server delivery becomes necessary.

## Recommended First Coverage

Track high-signal, low-volume events:

- Booking request success
- Contact form success
- Trade enquiry success
- Instagram highlight opened

These events measure business value without tracking sensitive content or creating noisy analytics.
