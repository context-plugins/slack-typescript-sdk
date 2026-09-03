import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsUserProfileShort = {
  avatarHash: string;
  displayName: string;
  displayNameNormalized?: string;
  firstName: string | null;
  image72: string;
  isRestricted: boolean;
  isUltraRestricted: boolean;
  name: string;
  realName: string;
  realNameNormalized?: string;
  team: string;
};

export const objsUserProfileShortSchema: Schema<ObjsUserProfileShort> = s.object<ObjsUserProfileShort>({
  avatarHash: s.string(),
  displayName: s.string(),
  displayNameNormalized: s.optional(s.string()),
  firstName: s.nullable(s.string()),
  image72: s.string(),
  isRestricted: s.boolean(),
  isUltraRestricted: s.boolean(),
  name: s.string(),
  realName: s.string(),
  realNameNormalized: s.optional(s.string()),
  team: s.string(),
  _keysMap: {
    avatarHash: "avatar_hash",
    displayName: "display_name",
    displayNameNormalized: "display_name_normalized",
    firstName: "first_name",
    image72: "image_72",
    isRestricted: "is_restricted",
    isUltraRestricted: "is_ultra_restricted",
    realName: "real_name",
    realNameNormalized: "real_name_normalized",
  },
});
