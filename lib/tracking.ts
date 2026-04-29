import posthog from "posthog-js";
import { getPostHogClientConfig } from "@/lib/integration-config";

export const EVENTS = {
  BOOKING_REQUEST_SUBMITTED: "booking_request.submitted",
  CONTACT_FORM_SUBMITTED: "contact_form.submitted",
  TRADE_ENQUIRY_SUBMITTED: "trade_enquiry.submitted",
  INSTAGRAM_HIGHLIGHT_OPENED: "instagram_highlight.opened",
} as const;

type EventName = (typeof EVENTS)[keyof typeof EVENTS];
type ClientType = "New client" | "Returning client";

type EventProperties = Record<string, string | number | boolean | undefined>;
const isDevelopment = process.env.NODE_ENV === "development";
const isPostHogDevEnabled = process.env.NEXT_PUBLIC_POSTHOG_DEV_ENABLED === "true";
const isPostHogEnabled =
  Boolean(getPostHogClientConfig()) && (!isDevelopment || isPostHogDevEnabled);

export type BookingRequestSubmittedProperties = {
  preferred_service_slug?: string;
  client_type?: ClientType;
  has_preferred_date: boolean;
  has_preferred_time: boolean;
  source: string;
};

export type ContactFormSubmittedProperties = {
  source: string;
};

export type TradeEnquirySubmittedProperties = {
  enquiry_type?: string;
  source: string;
};

export type InstagramHighlightOpenedProperties = {
  highlight_id: string;
  highlight_title: string;
  provider_configured: boolean;
};

function capture(event: EventName, properties: EventProperties) {
  if (typeof window === "undefined" || !isPostHogEnabled) {
    return;
  }

  try {
    posthog.capture(event, compactProperties(properties));
  } catch {
    // Analytics must never block booking or enquiry flows.
  }
}

function compactProperties(properties: EventProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  );
}

export function trackBookingRequestSubmitted(
  properties: BookingRequestSubmittedProperties,
) {
  capture(EVENTS.BOOKING_REQUEST_SUBMITTED, properties);
}

export function trackContactFormSubmitted(properties: ContactFormSubmittedProperties) {
  capture(EVENTS.CONTACT_FORM_SUBMITTED, properties);
}

export function trackTradeEnquirySubmitted(
  properties: TradeEnquirySubmittedProperties,
) {
  capture(EVENTS.TRADE_ENQUIRY_SUBMITTED, properties);
}

export function trackInstagramHighlightOpened(
  properties: InstagramHighlightOpenedProperties,
) {
  capture(EVENTS.INSTAGRAM_HIGHLIGHT_OPENED, properties);
}
