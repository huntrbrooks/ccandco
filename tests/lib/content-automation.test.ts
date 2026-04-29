import { describe, expect, it } from "vitest";
import {
  approvedAssetSchema,
  approvedTestimonialSchema,
  contentCalendarItemSchema,
  n8nWebhookPayloadSchema,
} from "../../lib/content-automation";

describe("contentCalendarItemSchema", () => {
  it("requires human approval before scheduling or publishing", () => {
    const result = contentCalendarItemSchema.safeParse({
      date: "2026-05-04",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Approved",
      approver: "Owner",
      publishMode: "Schedule after approval",
    });

    expect(result.success).toBe(true);
  });

  it("rejects publishing modes for unapproved content", () => {
    const result = contentCalendarItemSchema.safeParse({
      date: "2026-05-04",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Ready for Review",
      publishMode: "Schedule after approval",
    });

    expect(result.success).toBe(false);
  });

  it("requires an approver for approved content", () => {
    const result = contentCalendarItemSchema.safeParse({
      date: "2026-05-04",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Approved",
      publishMode: "Draft only",
    });

    expect(result.success).toBe(false);
  });

  it("requires scheduled and published evidence for final states", () => {
    const scheduled = contentCalendarItemSchema.safeParse({
      date: "2026-05-04",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Scheduled",
      approver: "Owner",
      publishMode: "Schedule after approval",
    });
    const published = contentCalendarItemSchema.safeParse({
      date: "2026-05-04",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Published",
      approver: "Owner",
      publishMode: "Publish after approval",
    });

    expect(scheduled.success).toBe(false);
    expect(published.success).toBe(false);
  });

  it("rejects invalid calendar dates", () => {
    const result = contentCalendarItemSchema.safeParse({
      date: "2026-02-31",
      platform: "Instagram",
      format: "Reel",
      pillar: "Education",
      service: "Classic Lash Extensions",
      hook: "Not sure which lash set is right for you?",
      captionDraft: "A calm draft for owner review.",
      visualBrief: "Close-up lash brush-through.",
      cta: "Book when you are ready.",
      approvalStatus: "Drafting",
      publishMode: "Draft only",
    });

    expect(result.success).toBe(false);
  });
});

describe("approvedAssetSchema", () => {
  it("requires client consent for before and after imagery", () => {
    const result = approvedAssetSchema.safeParse({
      assetName: "Lash before and after",
      fileUrl: "https://example.com/lashes.jpg",
      service: "Classic Lash Extensions",
      assetType: "Before/After",
      clientConsent: false,
      approvedChannels: ["Instagram"],
    });

    expect(result.success).toBe(false);
  });
});

describe("approvedTestimonialSchema", () => {
  it("requires documented marketing consent", () => {
    const result = approvedTestimonialSchema.safeParse({
      reviewText: "A calm and careful appointment.",
      clientDisplayName: "Client",
      service: "Classic Lash Extensions",
      source: "Google",
      marketingConsent: false,
      approvedQuote: "A calm and careful appointment.",
      dateAdded: "2026-05-04",
    });

    expect(result.success).toBe(false);
  });
});

describe("n8nWebhookPayloadSchema", () => {
  it("accepts the supported automation workflow triggers", () => {
    const result = n8nWebhookPayloadSchema.safeParse({
      workflow: "weekly_content_calendar",
      requestedBy: "owner",
      runAt: "2026-05-03T17:00:00+10:00",
    });

    expect(result.success).toBe(true);
  });

  it("rejects malformed scheduled run times", () => {
    const result = n8nWebhookPayloadSchema.safeParse({
      workflow: "weekly_content_calendar",
      requestedBy: "owner",
      runAt: "next Sunday",
    });

    expect(result.success).toBe(false);
  });
});
