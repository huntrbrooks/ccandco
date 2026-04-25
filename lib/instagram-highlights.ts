export type InstagramMediaItem = {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  caption?: string;
};

export type InstagramHighlight = {
  id: string;
  title: string;
  coverUrl?: string;
  mediaItems: InstagramMediaItem[];
};

const ARRAY_KEYS = [
  "highlights",
  "data",
  "items",
  "result",
  "results",
  "story_highlights",
];

const MEDIA_ARRAY_KEYS = ["items", "media", "stories", "reels", "clips"];

const TITLE_KEYS = ["title", "name", "label"];
const COVER_KEYS = ["cover_url", "coverUrl", "cover", "thumbnail_url", "thumbnailUrl"];
const URL_KEYS = [
  "video_url",
  "videoUrl",
  "play_url",
  "playUrl",
  "image_url",
  "imageUrl",
  "display_url",
  "displayUrl",
  "media_url",
  "mediaUrl",
  "url",
];
const THUMBNAIL_KEYS = ["thumbnail_url", "thumbnailUrl", "cover_url", "coverUrl"];
const CAPTION_KEYS = ["caption", "text", "description"];

export function normalizeHighlightResponse(payload: unknown): InstagramHighlight[] {
  const entries = Array.isArray(payload)
    ? payload
    : firstArray(readRecord(payload), ARRAY_KEYS);

  if (!entries) {
    return [];
  }

  return entries
    .map((entry, index) => normalizeHighlight(entry, index))
    .filter((highlight): highlight is InstagramHighlight => highlight !== null);
}

function normalizeHighlight(entry: unknown, index: number): InstagramHighlight | null {
  const record = readRecord(entry);

  if (!record) {
    return null;
  }

  const title = firstString(record, TITLE_KEYS) ?? `Highlight ${index + 1}`;
  const mediaEntries = firstArray(record, MEDIA_ARRAY_KEYS) ?? [];
  const mediaItems = mediaEntries
    .map((item, itemIndex) => normalizeMediaItem(item, `${index}-${itemIndex}`))
    .filter((item): item is InstagramMediaItem => item !== null);

  return {
    id: firstString(record, ["id", "pk", "highlight_id"]) ?? slugify(title, index),
    title,
    coverUrl: firstString(record, COVER_KEYS),
    mediaItems,
  };
}

function normalizeMediaItem(entry: unknown, fallbackId: string): InstagramMediaItem | null {
  const record = readRecord(entry);

  if (!record) {
    return null;
  }

  const url = firstString(record, URL_KEYS);

  if (!url) {
    return null;
  }

  const mediaType = (firstString(record, ["type", "media_type", "mediaType"]) ?? "")
    .toLowerCase()
    .trim();
  const type = mediaType.includes("video") || looksLikeVideo(url) ? "video" : "image";

  return {
    id: firstString(record, ["id", "pk", "media_id"]) ?? fallbackId,
    type,
    url,
    thumbnailUrl: firstString(record, THUMBNAIL_KEYS),
    caption: firstString(record, CAPTION_KEYS),
  };
}

function firstArray(
  record: Record<string, unknown> | null,
  keys: string[],
): unknown[] | null {
  if (!record) {
    return null;
  }

  for (const key of keys) {
    const value = record[key];
    if (Array.isArray(value)) {
      return value;
    }

    const nested = firstArray(readRecord(value), keys);
    if (nested) {
      return nested;
    }
  }

  return null;
}

function firstString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    if (typeof value === "number") {
      return String(value);
    }
  }

  return undefined;
}

function readRecord(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  return null;
}

function looksLikeVideo(url: string) {
  return /\.(mp4|mov|webm)(?:\?|#|$)/i.test(url);
}

function slugify(value: string, index: number) {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || `highlight-${index + 1}`;
}
