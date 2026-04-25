import type { Metadata } from "next";
import { services } from "@/lib/services";
import { getAddressLine, getInstagramUrl, siteConfig } from "@/lib/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/logo-reference.jpg",
}: MetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} boutique beauty studio in Elwood`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function createBeautySalonJsonLd() {
  const address = siteConfig.address;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    image: new URL("/images/logo-reference.jpg", siteConfig.url).toString(),
    telephone: siteConfig.phone,
    priceRange: "$$",
    sameAs: [getInstagramUrl()],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.suburb,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: address.country,
    },
    areaServed: ["Elwood", "Melbourne", "Bayside Melbourne"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.name,
      description: service.shortDescription,
      price: service.startingPrice,
      availability: "https://schema.org/InStock",
      url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
    })),
  };
}

export function createBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export const localBusinessSummary = `${siteConfig.name} is located at ${getAddressLine()}, offering ${services
  .slice(0, 3)
  .map((service) => service.name.toLowerCase())
  .join(", ")} and more.`;
