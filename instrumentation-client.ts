import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const isDevelopment = process.env.NODE_ENV === "development";
const isPostHogDevEnabled = process.env.NEXT_PUBLIC_POSTHOG_DEV_ENABLED === "true";
const shouldInitPostHog =
  Boolean(posthogKey) && (!isDevelopment || isPostHogDevEnabled);

if (posthogKey && shouldInitPostHog) {
  posthog.init(posthogKey, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: isDevelopment && isPostHogDevEnabled,
  });
}
