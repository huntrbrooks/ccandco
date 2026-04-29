import { describe, expect, it } from "vitest";
import { createWeeklyContentPlan } from "../../lib/content-plan";

describe("createWeeklyContentPlan", () => {
  it("creates a seven-day draft-only plan from existing service data", () => {
    const plan = createWeeklyContentPlan({
      weekStartsOn: "2026-05-04",
    });

    expect(plan).toHaveLength(7);
    expect(plan[0]).toMatchObject({
      date: "2026-05-04",
      platform: "Instagram",
      approvalStatus: "Drafting",
      publishMode: "Draft only",
    });
    expect(plan.every((item) => item.service.length > 0)).toBe(true);
    expect(plan.every((item) => item.captionDraft.includes("Draft direction:"))).toBe(
      true,
    );
  });

  it("rejects impossible start dates instead of normalizing them", () => {
    expect(() =>
      createWeeklyContentPlan({
        weekStartsOn: "2026-02-31",
      }),
    ).toThrow("Expected weekStartsOn to be a real ISO date.");
  });
});
