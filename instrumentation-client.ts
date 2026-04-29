import posthog from "posthog-js";
import { getPostHogClientConfig } from "@/lib/integration-config";

const posthogConfig = getPostHogClientConfig();
const isDevelopment = process.env.NODE_ENV === "development";
const isPostHogDevEnabled = process.env.NEXT_PUBLIC_POSTHOG_DEV_ENABLED === "true";
const shouldInitPostHog =
  Boolean(posthogConfig) && (!isDevelopment || isPostHogDevEnabled);

if (posthogConfig && shouldInitPostHog) {
  posthog.init(posthogConfig.key, {
    api_host: posthogConfig.apiHost,
    ui_host: posthogConfig.uiHost,
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: isDevelopment && isPostHogDevEnabled,
  });
}
