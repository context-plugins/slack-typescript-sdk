import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsIcon = {
  image102?: string;
  image132?: string;
  image230?: string;
  image34?: string;
  image44?: string;
  image68?: string;
  image88?: string;
  imageDefault?: boolean;
};

export const objsIconSchema: Schema<ObjsIcon> = s.object<ObjsIcon>({
  image102: s.optional(s.string()),
  image132: s.optional(s.string()),
  image230: s.optional(s.string()),
  image34: s.optional(s.string()),
  image44: s.optional(s.string()),
  image68: s.optional(s.string()),
  image88: s.optional(s.string()),
  imageDefault: s.optional(s.boolean()),
  _keysMap: {
    image102: "image_102",
    image132: "image_132",
    image230: "image_230",
    image34: "image_34",
    image44: "image_44",
    image68: "image_68",
    image88: "image_88",
    imageDefault: "image_default",
  },
});
