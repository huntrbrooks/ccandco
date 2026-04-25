# Tracking Delta

**Generated:** 2026-04-26  
**Current state:** PostHog browser SDK initialized, no custom product events detected.  
**Target state:** A small typed PostHog event layer covering business-critical conversions and meaningful social proof engagement.

## Add

- `booking_request.submitted`
  - Measures the website's primary value action.
  - Do not include name, email, phone, notes, or free text.

- `contact_form.submitted`
  - Measures general lead volume.
  - Only include the form source.

- `trade_enquiry.submitted`
  - Measures industry and partnership lead volume.
  - Include selected enquiry type only; do not include business name or message text.

- `instagram_highlight.opened`
  - Measures engagement with social proof and the interactive highlight modal.
  - Include card metadata only.

## Later

- `external_booking_link.clicked`
  - Track once an external booking URL is actively configured.

- `service_booking_cta.clicked`
  - Track service-level booking intent from service detail pages.

## Change

- Add a central typed tracking module so raw event names are not scattered across components.
- Keep initial delivery browser-side with `posthog-js`; server-side delivery is unnecessary until there is a durable lead record or authenticated visitor identity.

## Remove

No existing custom events need removal.

## Privacy Guardrails

- Never capture names, emails, phone numbers, business names, notes, or message bodies.
- Use booleans and selected enum/string values to describe form shape without sensitive content.
- Keep anonymous visitor tracking until the product introduces accounts or persisted customer IDs.
