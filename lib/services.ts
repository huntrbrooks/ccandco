export type Service = {
  slug: string;
  name: string;
  category: "Lashes" | "Teeth Whitening" | "Brows" | "Consultation";
  shortDescription: string;
  description: string;
  duration: string;
  startingPrice: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  aftercare: string[];
  whoItIsFor: string[];
  whatToExpect: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

const lashAftercare = [
  "Avoid touching, pulling or sleeping directly on your lashes.",
  "Cleanse and brush lashes daily to keep them fresh and in shape.",
  "Avoid oil-based products around the eye area.",
  "Book refills as recommended to maintain fullness.",
];

const teethAftercare = [
  "Follow a white diet for the first 24-48 hours after treatment.",
  "Avoid extremely hot or cold liquids directly after your treatment.",
  "Avoid staining food and drinks while teeth are most vulnerable.",
  "Maintain results with gentle brushing and touch-up appointments as advised.",
];

export const services: Service[] = [
  {
    slug: "classic-lash-extensions",
    name: "Classic Lash Extensions",
    category: "Lashes",
    shortDescription:
      "A soft, refined lash enhancement for natural definition and everyday elegance.",
    description:
      "Classic lash extensions are applied one-to-one for a polished, natural finish that enhances your eye shape without feeling heavy.",
    duration: "1.5-2 hours",
    startingPrice: "$100",
    image: "/images/eyelashes.png",
    imageAlt: "Detailed close-up of full lash extensions and brow styling.",
    benefits: [
      "Natural-looking definition",
      "Lightweight everyday wear",
      "Tailored length and curl",
      "Low-effort morning routine",
    ],
    aftercare: lashAftercare,
    whoItIsFor: [
      "Clients who want a soft, natural lash look",
      "First-time lash extension clients",
      "Clients with a minimal beauty routine",
    ],
    whatToExpect: [
      "A consultation to select length, curl and mapping",
      "Gentle lash application while you relax",
      "Aftercare guidance before you leave",
    ],
    faq: [
      {
        question: "Will classic lashes look natural?",
        answer:
          "Yes. Classic sets are designed for subtle definition and can be tailored to your preferred level of polish.",
      },
      {
        question: "How often should I book refills?",
        answer:
          "Most clients maintain their set with refills every 2-3 weeks, depending on natural lash growth and aftercare.",
      },
    ],
  },
  {
    slug: "hybrid-lash-extensions",
    name: "Hybrid Lash Extensions",
    category: "Lashes",
    shortDescription:
      "A balanced blend of classic and volume lashes for soft fullness and texture.",
    description:
      "Hybrid lashes combine natural definition with airy volume to create a fuller, textured result while remaining wearable.",
    duration: "1.5-2.5 hours",
    startingPrice: "$110",
    image: "/images/Lashes 1.png",
    imageAlt: "Lash treatment being applied in a calm beauty studio.",
    benefits: [
      "Custom balance of definition and fullness",
      "Soft textured finish",
      "Great for everyday or occasion wear",
      "Personalised lash mapping",
    ],
    aftercare: lashAftercare,
    whoItIsFor: [
      "Clients who want more fullness than classic lashes",
      "Clients who like a soft glam finish",
      "Clients wanting a customised lash texture",
    ],
    whatToExpect: [
      "A tailored consultation on shape and density",
      "A mix of classic and volume techniques",
      "A finished set refined to your natural features",
    ],
    faq: [
      {
        question: "Are hybrid lashes dramatic?",
        answer:
          "They can be soft or more defined. Your artist will tailor density and mapping to suit your preferred finish.",
      },
      {
        question: "Can hybrid lashes suit sparse natural lashes?",
        answer:
          "Often yes. The volume fans can help create softness and fullness while protecting natural lash health.",
      },
    ],
  },
  {
    slug: "volume-lash-extensions",
    name: "Volume Lash Extensions",
    category: "Lashes",
    shortDescription:
      "A fuller, more striking lash set with soft handmade volume and definition.",
    description:
      "Volume lashes are designed for clients who love a more noticeable lash look, using lightweight fans to build fullness without sacrificing comfort.",
    duration: "2-2.5 hours",
    startingPrice: "$150",
    image: "/images/Brows and lashes.png",
    imageAlt: "Close-up of polished brows and full lash extensions.",
    benefits: [
      "Fuller lash line",
      "Bold but refined finish",
      "Lightweight volume fans",
      "Great for events and high-impact beauty",
    ],
    aftercare: lashAftercare,
    whoItIsFor: [
      "Clients who want a bold lash look",
      "Clients who wear makeup often",
      "Clients who want more density across the lash line",
    ],
    whatToExpect: [
      "A consultation on preferred volume and shape",
      "Careful application of lightweight volume fans",
      "A polished result designed around eye shape",
    ],
    faq: [
      {
        question: "Will volume lashes feel heavy?",
        answer:
          "No. The set is created with lightweight fans selected to suit your natural lashes.",
      },
      {
        question: "Can I choose a softer volume look?",
        answer:
          "Yes. Volume can be styled from soft and fluffy through to more dramatic density.",
      },
    ],
  },
  {
    slug: "lash-lift-and-tint",
    name: "Lash Lift and Tint",
    category: "Lashes",
    shortDescription:
      "A low-maintenance lift and tint for natural lashes with beautiful curl.",
    description:
      "A lash lift and tint enhances your natural lashes by lifting, shaping and darkening them for a fresh, open-eyed finish.",
    duration: "40-60 minutes",
    startingPrice: "$70",
    image: "/images/Lashes 1.png",
    imageAlt: "Natural lash service in a soft studio treatment setting.",
    benefits: [
      "Enhances natural lashes",
      "No extension maintenance",
      "Fresh lifted appearance",
      "Ideal for low-maintenance beauty",
    ],
    aftercare: [
      "Keep lashes dry for the first 24 hours.",
      "Avoid steam, mascara and oil-based products immediately after treatment.",
      "Brush lashes gently as needed.",
    ],
    whoItIsFor: [
      "Clients who prefer natural lashes",
      "Clients wanting a low-maintenance option",
      "Clients not ready for extensions",
    ],
    whatToExpect: [
      "A consultation on desired lift",
      "Gentle lifting and tinting process",
      "Simple aftercare instructions",
    ],
    faq: [
      {
        question: "How long does a lash lift last?",
        answer:
          "Results commonly last 6-8 weeks depending on your natural lash cycle and aftercare.",
      },
      {
        question: "Is it suitable before holidays?",
        answer:
          "Yes. It is a great low-maintenance option for travel when timed with aftercare in mind.",
      },
    ],
  },
  {
    slug: "professional-teeth-whitening",
    name: "Professional Teeth Whitening",
    category: "Teeth Whitening",
    shortDescription:
      "A brighter smile treatment delivered in a calm, comfortable studio setting.",
    description:
      "Professional teeth whitening is designed to brighten your smile efficiently while keeping the experience relaxed and guided.",
    duration: "1.5 hours",
    startingPrice: "$300",
    image: "/images/Teeth whitening.png",
    imageAlt: "Professional teeth whitening treatment in a beauty studio.",
    benefits: [
      "Brighter smile",
      "Comfort-led appointment",
      "Clear pre-care and aftercare",
      "Touch-up options available",
    ],
    aftercare: teethAftercare,
    whoItIsFor: [
      "Clients wanting a brighter smile",
      "Clients preparing for events",
      "Clients seeking a professional in-studio treatment",
    ],
    whatToExpect: [
      "Pre-treatment suitability and comfort check",
      "Guided whitening session in studio",
      "Clear white-diet and aftercare advice",
    ],
    faq: [
      {
        question: "How long does the appointment take?",
        answer:
          "Please allow around 1.5 hours for the full cosmetic teeth whitening appointment.",
      },
      {
        question: "Can I eat normally afterwards?",
        answer:
          "A white diet is recommended for the first 24-48 hours to protect and extend your result.",
      },
    ],
  },
  {
    slug: "brow-sculpting",
    name: "Brow Sculpting",
    category: "Brows",
    shortDescription:
      "A refined brow shape designed to frame your features with balance.",
    description:
      "Brow sculpting tidies, shapes and refines your brows so they complement your natural features and beauty routine.",
    duration: "30-40 minutes",
    startingPrice: "$45",
    image: "/images/Brows.png",
    imageAlt: "Brow sculpting treatment being applied during an appointment.",
    benefits: [
      "Clean, balanced brow shape",
      "Soft face-framing definition",
      "Tailored to natural growth",
      "Easy maintenance guidance",
    ],
    aftercare: [
      "Avoid heavy makeup on the brow area immediately after treatment.",
      "Avoid excessive heat, steam or exfoliation for 24 hours.",
      "Follow your artist's maintenance timing recommendation.",
    ],
    whoItIsFor: [
      "Clients wanting a polished brow shape",
      "Clients growing out or correcting brows",
      "Clients who prefer a natural but refined look",
    ],
    whatToExpect: [
      "Shape consultation",
      "Gentle brow grooming and refinement",
      "Advice for maintaining your shape",
    ],
    faq: [
      {
        question: "Can brow sculpting look natural?",
        answer:
          "Yes. The treatment is tailored to your natural brow growth, face shape and preferred finish.",
      },
      {
        question: "Can I pair this with tinting?",
        answer:
          "Yes. Brow tint can be added for extra definition when suitable.",
      },
    ],
  },
  {
    slug: "brow-tint",
    name: "Brow Tint",
    category: "Brows",
    shortDescription:
      "A soft colour boost to enhance natural brow shape and fullness.",
    description:
      "Brow tint adds natural-looking depth and definition, helping brows appear fuller and more polished.",
    duration: "20-30 minutes",
    startingPrice: "$30",
    image: "/images/Brows and lashes.png",
    imageAlt: "Close-up of shaped brows and lash styling.",
    benefits: [
      "Soft natural definition",
      "Fuller-looking brows",
      "Quick appointment",
      "Pairs beautifully with brow sculpting",
    ],
    aftercare: [
      "Keep the brow area dry immediately after treatment where possible.",
      "Avoid exfoliation and oils over brows for 24 hours.",
      "Use gentle skincare around the area.",
    ],
    whoItIsFor: [
      "Clients with fair or sparse-looking brows",
      "Clients wanting low-effort definition",
      "Clients pairing brow services with lashes",
    ],
    whatToExpect: [
      "Colour consultation",
      "Quick tint application",
      "A natural, softly defined finish",
    ],
    faq: [
      {
        question: "Will the colour be too dark?",
        answer:
          "Your artist will select a shade to suit your colouring and preferred finish.",
      },
      {
        question: "How long does tint last?",
        answer:
          "Longevity varies, but careful aftercare helps preserve the colour for longer.",
      },
    ],
  },
  {
    slug: "beauty-add-on-consultation",
    name: "Beauty Add-On Consultation",
    category: "Consultation",
    shortDescription:
      "A flexible consultation for add-ons, future services and tailored recommendations.",
    description:
      "This consultation is designed for clients who want guidance on the right combination of beauty services for their goals.",
    duration: "20 minutes",
    startingPrice: "From $25",
    image: "/images/consultation .png",
    imageAlt: "Beauty consultation in a soft studio setting.",
    benefits: [
      "Personalised recommendations",
      "Ideal before combining services",
      "Flexible future service planning",
      "Clear next steps",
    ],
    aftercare: [
      "Aftercare will depend on any services booked after your consultation.",
      "Your artist will provide specific guidance at your appointment.",
    ],
    whoItIsFor: [
      "New clients exploring treatment options",
      "Clients preparing for an event",
      "Clients interested in future beauty services",
    ],
    whatToExpect: [
      "A conversation about goals and timing",
      "Suitability guidance",
      "A recommended treatment plan",
    ],
    faq: [
      {
        question: "Can I book a service after the consultation?",
        answer:
          "Yes. The consultation is intended to help you choose the most suitable service pathway.",
      },
      {
        question: "Will more services be added later?",
        answer:
          "Yes. This service structure is designed so CC & CO can add future beauty and aesthetic services easily.",
      },
    ],
  },
];

export const featuredServices = services.slice(0, 3);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceCategories() {
  return Array.from(new Set(services.map((service) => service.category)));
}
