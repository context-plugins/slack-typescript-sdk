import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Icons1 = {
  emoji?: string;
  image64?: string;
};

export const icons1Schema: Schema<Icons1> = s.object<Icons1>({
  emoji: s.optional(s.string()),
  image64: s.optional(s.string()),
  _keysMap: {
    image64: "image_64",
  },
});
