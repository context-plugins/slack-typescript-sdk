import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Attachment = {
  fallback?: string;
  id: number;
  imageBytes?: number;
  imageHeight?: number;
  imageUrl?: string;
  imageWidth?: number;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>({
  fallback: s.optional(s.string()),
  id: s.number(),
  imageBytes: s.optional(s.number()),
  imageHeight: s.optional(s.number()),
  imageUrl: s.optional(s.string()),
  imageWidth: s.optional(s.number()),
  _keysMap: {
    imageBytes: "image_bytes",
    imageHeight: "image_height",
    imageUrl: "image_url",
    imageWidth: "image_width",
  },
});
