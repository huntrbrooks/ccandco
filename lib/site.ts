export const siteConfig = {
  name: "CC & CO.",
  legalName: "CC & CO. Aesthetics",
  headline: "BEAUTY THAT INSPIRES CONFIDENCE",
  description:
    "Premium boutique beauty studio in Elwood, Melbourne, offering bespoke eyelash extensions, professional teeth whitening, and tailored beauty services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ccandcoaesthetics.com",
  lastUpdated: "2026-04-26",
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    "",
  instagramHandle:
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "ccandcoaesthetics",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  googleMapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "",
  studioEmail: "cassandra@ccandco.beauty",
  phone: "+61 451 444 250",
  publicLocation: "Bayside Area",
  serviceBanner: "Mobile Services available across the Bayside Area",
  hours: [
    { label: "Mon-Fri", value: "9 AM - 6 PM" },
    { label: "Sat", value: "10 AM - 4 PM" },
    { label: "Sun", value: "Closed" },
  ],
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Trade", href: "/trade" },
    { label: "Contact Us", href: "/contact" },
    { label: "Book Now", href: "/book" },
  ],
  keywords: [
    "CC & CO Elwood",
    "Elwood beauty studio",
    "Eyelash extensions Elwood",
    "Lash extensions Melbourne",
    "Teeth whitening Elwood",
    "Teeth whitening Melbourne",
    "Beauty salon Elwood",
    "Boutique beauty studio Melbourne",
  ],
  announcement:
    "Boutique beauty treatments designed to leave you feeling confident, polished and cared for.",
  heroIntro: "Welcome to CC & CO.",
  introTitle: "Your Beauty, Our Expertise",
  introCopy:
    "We believe in enhancing your natural beauty with precision and care. Located in the heart of Elwood, Melbourne, our boutique studio offers bespoke eyelash extensions, professional teeth whitening, and additional beauty services tailored to your unique experience.",
  longCopy:
    "Our team of certified experts brings years of experience to every treatment, ensuring every client receives personalised results in a tranquil, welcoming space. Whether you are here for a fresh set of lashes or a brighter smile, CC & CO is dedicated to providing an experience that leaves every client feeling confident and rejuvenated.",
  confidenceCopy:
    "Whether a client wants a soft, natural look or something bold and striking, our tailored approach is designed to bring out confidence in every woman.",
  values: [
    "Certified experts",
    "Bespoke treatments",
    "Boutique Elwood studio",
    "Confidence-focused results",
    "Relaxing experience",
    "Quality products",
  ],
  process: [
    {
      title: "Consultation",
      description:
        "We begin with your goals, lifestyle, natural features and treatment history so every appointment feels personal.",
    },
    {
      title: "Treatment",
      description:
        "Your service is performed with precision, premium products and a calm pace that respects your comfort.",
    },
    {
      title: "Aftercare",
      description:
        "You leave with clear aftercare guidance so your results look beautiful for as long as possible.",
    },
  ],
  policyHighlights: [
    "Please arrive on time. If you are running late, send a message with your ETA.",
    "A minimum of 24 hours notice is required to cancel or reschedule.",
    "No-shows may not be offered another appointment.",
    "Please arrive to lash appointments with clean lashes and no eye makeup.",
    "For teeth whitening, brush teeth beforehand and avoid food or drink directly before your appointment.",
  ],
};

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Trade", href: "/trade" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Now", href: "/book" },
  { label: "Reviews", href: "/reviews" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export function getAddressLine() {
  return siteConfig.publicLocation;
}

export function getInstagramUrl() {
  return `https://www.instagram.com/${siteConfig.instagramHandle}/`;
}
