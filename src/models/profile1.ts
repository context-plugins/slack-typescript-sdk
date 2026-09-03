import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Profile1 = {
  avatarHash: string;
  image1024: string;
  image192: string;
  image24: string;
  image32: string;
  image48: string;
  image512: string;
  image72: string;
  imageOriginal: string;
};

export const profile1Schema: Schema<Profile1> = s.object<Profile1>({
  avatarHash: s.string(),
  image1024: s.string(),
  image192: s.string(),
  image24: s.string(),
  image32: s.string(),
  image48: s.string(),
  image512: s.string(),
  image72: s.string(),
  imageOriginal: s.string(),
  _keysMap: {
    avatarHash: "avatar_hash",
    image1024: "image_1024",
    image192: "image_192",
    image24: "image_24",
    image32: "image_32",
    image48: "image_48",
    image512: "image_512",
    image72: "image_72",
    imageOriginal: "image_original",
  },
});
