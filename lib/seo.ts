import type { Metadata } from "next";
import { services, type Service } from "@/lib/services";
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
  image = "/og-image.svg",
}: MetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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
          alt: `${siteConfig.name} boutique beauty studio in Elwood, Melbourne`,
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
  const businessId = new URL("/#local-business", siteConfig.url).toString();
  const websiteId = new URL("/#website", siteConfig.url).toString();
  const imageUrl = new URL("/og-image.svg", siteConfig.url).toString();
  const logoUrl = new URL("/images/logo-reference.svg", siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": businessId,
        name: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        image: imageUrl,
        logo: logoUrl,
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
          price: getPriceValue(service.startingPrice),
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
          url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@id": businessId,
        },
      },
    ],
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

export function createServicePageJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbGraph([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.name, path: `/services/${service.slug}` },
      ]),
      createServiceGraph(service),
      createFaqGraph(service),
    ],
  };
}

export const localBusinessSummary = `${siteConfig.name} is located at ${getAddressLine()}, offering ${services
  .slice(0, 3)
  .map((service) => service.name.toLowerCase())
  .join(", ")} and more.`;

function createBreadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

function createServiceGraph(service: Service) {
  const price = getPriceValue(service.startingPrice);

  return {
    "@type": "Service",
    "@id": new URL(`/services/${service.slug}#service`, siteConfig.url).toString(),
    name: service.name,
    description: service.description,
    serviceType: service.category,
    image: new URL("/og-image.svg", siteConfig.url).toString(),
    areaServed: ["Elwood", "Melbourne", "Bayside Melbourne"],
    provider: {
      "@id": new URL("/#local-business", siteConfig.url).toString(),
    },
    mainEntityOfPage: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
    offers: {
      "@type": "Offer",
      url: new URL(`/services/${service.slug}`, siteConfig.url).toString(),
      price,
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
  };
}

function createFaqGraph(service: Service) {
  return {
    "@type": "FAQPage",
    "@id": new URL(`/services/${service.slug}#faq`, siteConfig.url).toString(),
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function getPriceValue(price: string) {
  return price.match(/\d+(?:\.\d+)?/)?.[0] ?? price;
}
