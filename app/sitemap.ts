import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/book",
    "/trade",
    "/contact",
    "/reviews",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
