export type Testimonial = {
  quote: string;
  name: string;
  service?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The teeth whitening was amazing! My smile is brighter than ever, and the process was actually really fast and somewhat relaxing. Thank you ladies for being so welcoming and lovely. I will most definitely be back!",
    name: "Emma J.",
    service: "Professional Teeth Whitening",
  },
  {
    quote:
      "My lashes look so natural and polished. The appointment felt calm from start to finish and the aftercare was explained so clearly.",
    name: "Sophie M.",
    service: "Classic Lash Extensions",
  },
  {
    quote:
      "Beautiful studio, beautiful results. I felt listened to and left with exactly the soft glam look I asked for.",
    name: "Mia R.",
    service: "Hybrid Lash Extensions",
  },
  {
    quote:
      "A really elevated experience. The team made me feel comfortable and confident, and my brows have never looked better.",
    name: "Amelia K.",
    service: "Brow Sculpting",
  },
];
