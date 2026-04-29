import {
  type ContentCalendarItem,
  contentCalendarItemSchema,
  isoDateSchema,
} from "@/lib/content-automation";
import { services } from "@/lib/services";

type WeeklyContentPlanOptions = {
  weekStartsOn: string;
};

const weeklyRhythm = [
  {
    platform: "Instagram",
    format: "Carousel",
    pillar: "Education",
    hook: "Not sure which beauty service is right for you?",
    cta: "Start with a consultation when you are ready.",
    highlightDestination: "Start Here",
  },
  {
    platform: "Instagram",
    format: "Story",
    pillar: "Trust And Studio Experience",
    hook: "A calm look inside the CC & CO. appointment experience.",
    cta: "Message us if you have a question before booking.",
    highlightDestination: "Studio",
  },
  {
    platform: "Instagram",
    format: "Reel",
    pillar: "Confidence And Transformation",
    hook: "A polished beauty routine can still feel soft and considered.",
    cta: "Book your appointment or start with a consultation.",
    highlightDestination: "Book",
  },
  {
    platform: "Instagram",
    format: "Story",
    pillar: "Aftercare",
    hook: "Save this before your next appointment.",
    cta: "Ask your artist if you are unsure what aftercare applies.",
    highlightDestination: "Aftercare",
  },
  {
    platform: "Google Business Profile",
    format: "GBP Post",
    pillar: "Local Elwood Beauty",
    hook: "Boutique beauty services in Elwood, Melbourne.",
    cta: "Book ahead when you are planning your next appointment.",
    highlightDestination: "Book",
  },
  {
    platform: "Instagram",
    format: "Feed Post",
    pillar: "Social Proof",
    hook: "Kind words help new clients know what to expect.",
    cta: "Read more reviews or book when you are ready.",
    highlightDestination: "Reviews",
  },
  {
    platform: "Internal",
    format: "Internal Brief",
    pillar: "Booking And Availability",
    hook: "Plan next week's content before drafting begins.",
    cta: "Owner reviews and approves the next content queue.",
    highlightDestination: "Start Here",
  },
] as const;

export function createWeeklyContentPlan({
  weekStartsOn,
}: WeeklyContentPlanOptions): ContentCalendarItem[] {
  const startDate = parseLocalDate(weekStartsOn);

  return weeklyRhythm.map((slot, index) => {
    const service = services[index % services.length];
    const date = addDays(startDate, index);
    const item = {
      date: formatLocalDate(date),
      platform: slot.platform,
      format: slot.format,
      pillar: slot.pillar,
      service: service.name,
      hook: slot.hook,
      captionDraft: `Draft direction: ${service.shortDescription}`,
      storyFrames: [],
      visualBrief: `Use approved visuals for ${service.name}.`,
      cta: slot.cta,
      highlightDestination: slot.highlightDestination,
      approvalStatus: "Drafting",
      publishMode: "Draft only",
    };

    return contentCalendarItemSchema.parse(item);
  });
}

function parseLocalDate(value: string) {
  if (!isoDateSchema.safeParse(value).success) {
    throw new Error("Expected weekStartsOn to be a real ISO date.");
  }

  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + days);

  return nextDate;
}

function formatLocalDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
