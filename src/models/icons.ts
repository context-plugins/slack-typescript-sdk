import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Icons = {
  image36: string;
  image48: string;
  image72: string;
};

export const iconsSchema: Schema<Icons> = s.object<Icons>({
  image36: s.string(),
  image48: s.string(),
  image72: s.string(),
  _keysMap: {
    image36: "image_36",
    image48: "image_48",
    image72: "image_72",
  },
});
