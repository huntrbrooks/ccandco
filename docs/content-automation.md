# CC & CO. Content Automation Contracts

This document defines the repo-owned contracts for the future CC & CO. content machine. It is intentionally credential-free: it documents the shapes and guardrails needed by n8n, NotebookLM, Airtable, Notion, Google Sheets, Meta, Canva, and Google Business Profile without connecting to those services yet.

## Operating Rules

- Drafting is allowed without external credentials.
- Scheduling and publishing require `approvalStatus` to be `Approved`, `Scheduled`, or `Published`.
- No workflow may invent services, prices, availability, reviews, client outcomes, qualifications, medical claims, dental claims, or client stories.
- Before/after imagery requires documented client consent.
- Public publishing remains human-approved unless the owner explicitly changes the workflow.

## Source Files

- Brand and business facts: `lib/site.ts`
- Services, prices, FAQs, and aftercare: `lib/services.ts`
- Testimonials: `lib/testimonials.ts`
- Content automation schemas: `lib/content-automation.ts`
- Credential-free weekly draft generator: `lib/content-plan.ts`
- Content-machine guide: `CC AUTO INSTAGRAM/cc-and-co-content-machine-guide.md`

## Content Calendar Fields

The `contentCalendarItemSchema` maps to an Airtable, Notion, or Google Sheets table with these fields:

- `date`
- `platform`
- `format`
- `pillar`
- `service`
- `hook`
- `captionDraft`
- `storyFrames`
- `reelScript`
- `visualBrief`
- `cta`
- `highlightDestination`
- `assetNeeded`
- `approvalStatus`
- `approver`
- `publishMode`
- `scheduledUrl`
- `publishedUrl`
- `performanceNotes`

Recommended approval statuses:

- `Drafting`
- `Ready for Review`
- `Needs Edits`
- `Approved`
- `Scheduled`
- `Published`
- `Rejected`

## Approved Asset Fields

The `approvedAssetSchema` maps to an approved media table:

- `assetName`
- `fileUrl`
- `service`
- `assetType`
- `clientConsent`
- `approvedChannels`
- `altText`
- `reviewDate`

Before/after imagery must have `clientConsent: true`.

## Approved Testimonial Fields

The `approvedTestimonialSchema` maps to a review table:

- `reviewText`
- `clientDisplayName`
- `service`
- `source`
- `marketingConsent`
- `approvedQuote`
- `dateAdded`

Only rows with documented marketing consent should be used in generated social content.

Approved testimonial rows require `marketingConsent: true`; store unapproved or raw testimonials in a separate source if you need to review them later.

## n8n Webhook Contract

The `n8nWebhookPayloadSchema` supports these workflow keys:

- `weekly_content_calendar`
- `daily_content_draft`
- `review_repurposing`
- `aftercare_reminder`
- `monthly_performance_review`

Base payload:

```json
{
  "workflow": "weekly_content_calendar",
  "requestedBy": "owner",
  "runAt": "2026-05-03T17:00:00+10:00",
  "contentItemId": "optional-content-row-id"
}
```

Use `N8N_CONTENT_WEBHOOK_SECRET` to authenticate inbound workflow calls when a live n8n instance is connected.

Use ISO datetimes for `runAt`, for example `2026-05-03T17:00:00+10:00`. Calendar dates use strict `YYYY-MM-DD` values and impossible dates are rejected rather than normalized.

## Local Draft Generator

`createWeeklyContentPlan()` in `lib/content-plan.ts` creates a seven-day draft-only plan from the existing service list and the guide's weekly rhythm. It does not call any external APIs, does not schedule content, and always creates rows with:

- `approvalStatus: Drafting`
- `publishMode: Draft only`

This gives n8n, Airtable, Notion, or Google Sheets a stable local contract to adopt later without risking accidental publishing.

## Future Integration Map

- n8n: reads source data, triggers draft generation, writes content calendar rows, and sends approval notifications.
- NotebookLM: source-grounded brand Q&A and brief generation from the guide PDF and website exports.
- Airtable, Notion, or Google Sheets: approval queue and content calendar source of truth.
- Canva: design production and optional scheduling once owner approval exists.
- Meta Instagram API: optional direct publishing only after Meta app setup, permissions, and owner approval.
- Google Business Profile: optional draft or posting workflow after account access is configured.
- PostHog: website and content funnel analytics.

## Blocked Until Owner Input

- Approval database choice.
- n8n cloud versus self-hosted decision.
- Meta Developer app and Instagram professional account access.
- Final booking platform and URL.
- Approved imagery and review consent.
- Whether any workflow may schedule or publish automatically after approval.
