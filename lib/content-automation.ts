import { z } from "zod";

export const contentPlatforms = [
  "Instagram",
  "Google Business Profile",
  "Email",
  "SMS",
  "Internal",
] as const;

export const contentFormats = [
  "Feed Post",
  "Reel",
  "Carousel",
  "Story",
  "GBP Post",
  "Email Draft",
  "SMS Draft",
  "Internal Brief",
] as const;

export const contentPillars = [
  "Education",
  "Confidence And Transformation",
  "Aftercare",
  "Trust And Studio Experience",
  "Local Elwood Beauty",
  "Social Proof",
  "Booking And Availability",
  "Trade And Collaboration",
] as const;

export const approvalStatuses = [
  "Drafting",
  "Ready for Review",
  "Needs Edits",
  "Approved",
  "Scheduled",
  "Published",
  "Rejected",
] as const;

export const publishModes = [
  "Draft only",
  "Schedule after approval",
  "Publish after approval",
] as const;

const publishableStatuses = new Set(["Approved", "Scheduled", "Published"]);
const approvalEvidenceStatuses = new Set(["Approved", "Scheduled", "Published"]);
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

export const isoDateSchema = z.string().refine(isIsoDate, {
  message: "Expected a real ISO date in YYYY-MM-DD format.",
});

export const isoDateTimeSchema = z.string().refine(isIsoDateTime, {
  message: "Expected an ISO datetime.",
});

export const contentCalendarItemSchema = z
  .object({
    date: isoDateSchema,
    platform: z.enum(contentPlatforms),
    format: z.enum(contentFormats),
    pillar: z.enum(contentPillars),
    service: z.string().min(1),
    hook: z.string().min(1),
    captionDraft: z.string().min(1),
    storyFrames: z.array(z.string().min(1)).default([]),
    reelScript: z.string().optional(),
    visualBrief: z.string().min(1),
    cta: z.string().min(1),
    highlightDestination: z.string().optional(),
    assetNeeded: z.string().optional(),
    approvalStatus: z.enum(approvalStatuses),
    approver: z.string().optional(),
    publishMode: z.enum(publishModes).default("Draft only"),
    scheduledUrl: z.url().optional(),
    publishedUrl: z.url().optional(),
    performanceNotes: z.string().optional(),
  })
  .superRefine((item, context) => {
    if (
      item.publishMode !== "Draft only" &&
      !publishableStatuses.has(item.approvalStatus)
    ) {
      context.addIssue({
        code: "custom",
        path: ["publishMode"],
        message: "Content must be approved before scheduling or publishing.",
      });
    }

    if (
      approvalEvidenceStatuses.has(item.approvalStatus) &&
      !item.approver?.trim()
    ) {
      context.addIssue({
        code: "custom",
        path: ["approver"],
        message: "Approved, scheduled, and published content requires an approver.",
      });
    }

    if (item.approvalStatus === "Scheduled" && !item.scheduledUrl) {
      context.addIssue({
        code: "custom",
        path: ["scheduledUrl"],
        message: "Scheduled content requires a scheduling URL.",
      });
    }

    if (item.approvalStatus === "Published" && !item.publishedUrl) {
      context.addIssue({
        code: "custom",
        path: ["publishedUrl"],
        message: "Published content requires a published URL.",
      });
    }
  });

export const approvedAssetSchema = z
  .object({
    assetName: z.string().min(1),
    fileUrl: z.url(),
    service: z.string().min(1),
    assetType: z.enum([
      "Studio",
      "Service",
      "Before/After",
      "Review",
      "Brand",
      "Other",
    ]),
    clientConsent: z.boolean(),
    approvedChannels: z.array(z.enum(contentPlatforms)).min(1),
    altText: z.string().optional(),
    reviewDate: isoDateSchema.optional(),
  })
  .superRefine((asset, context) => {
    if (asset.assetType === "Before/After" && !asset.clientConsent) {
      context.addIssue({
        code: "custom",
        path: ["clientConsent"],
        message: "Before and after assets require documented client consent.",
      });
    }
  });

export const approvedTestimonialSchema = z.object({
  reviewText: z.string().min(1),
  clientDisplayName: z.string().min(1),
  service: z.string().min(1),
  source: z.string().min(1),
  marketingConsent: z.literal(true),
  approvedQuote: z.string().min(1),
  dateAdded: isoDateSchema,
});

export const n8nWebhookPayloadSchema = z.object({
  workflow: z.enum([
    "weekly_content_calendar",
    "daily_content_draft",
    "review_repurposing",
    "aftercare_reminder",
    "monthly_performance_review",
  ]),
  requestedBy: z.string().min(1),
  runAt: isoDateTimeSchema,
  contentItemId: z.string().optional(),
});

export type ContentCalendarItem = z.infer<typeof contentCalendarItemSchema>;
export type ApprovedAsset = z.infer<typeof approvedAssetSchema>;
export type ApprovedTestimonial = z.infer<typeof approvedTestimonialSchema>;
export type N8nWebhookPayload = z.infer<typeof n8nWebhookPayloadSchema>;

function isIsoDate(value: string) {
  if (!isoDatePattern.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function isIsoDateTime(value: string) {
  const timestamp = Date.parse(value);

  return Number.isFinite(timestamp) && value.includes("T");
}
