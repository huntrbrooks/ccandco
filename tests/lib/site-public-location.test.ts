import { describe, expect, it } from "vitest";
import { createBeautySalonJsonLd } from "@/lib/seo";
import { getAddressLine, siteConfig } from "@/lib/site";

describe("public location copy", () => {
  it("uses Bayside Area instead of a street address", () => {
    expect(getAddressLine()).toBe("Bayside Area");
  });

  it("promotes mobile services in the global banner copy", () => {
    expect(siteConfig.serviceBanner).toMatch(/Mobile Services/i);
  });

  it("does not publish a postal address in local business structured data", () => {
    const jsonLd = createBeautySalonJsonLd();
    const localBusiness = jsonLd["@graph"].find((entry) =>
      Array.isArray(entry["@type"])
        ? entry["@type"].includes("LocalBusiness")
        : entry["@type"] === "LocalBusiness",
    );

    expect(localBusiness).toBeDefined();
    expect(localBusiness).not.toHaveProperty("address");
    expect(localBusiness).toHaveProperty(
      "areaServed",
      expect.arrayContaining(["Bayside Area"]),
    );
  });
});
