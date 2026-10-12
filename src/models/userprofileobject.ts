import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Userprofileobject = {
  alwaysActive?: boolean;
  apiAppId?: string;
  avatarHash: string;
  botId?: string;
  displayName: string;
  displayNameNormalized: string;
  email?: string | null;
  fields: Record<string, unknown>[] | null;
  firstName?: string | null;
  guestExpirationTs?: number | null;
  guestInvitedBy?: string | null;
  image1024?: string | null;
  image192?: string | null;
  image24?: string | null;
  image32?: string | null;
  image48?: string | null;
  image512?: string | null;
  image72?: string | null;
  imageOriginal?: string | null;
  isAppUser?: boolean;
  isCustomImage?: boolean;
  isRestricted?: boolean | null;
  isUltraRestricted?: boolean | null;
  lastAvatarImageHash?: string;
  lastName?: string | null;
  membershipsCount?: number;
  name?: string | null;
  phone: string;
  pronouns?: string;
  realName: string;
  realNameNormalized: string;
  skype: string;
  statusDefaultEmoji?: string;
  statusDefaultText?: string;
  statusDefaultTextCanonical?: string | null;
  statusEmoji: string;
  statusExpiration?: number;
  statusText: string;
  statusTextCanonical?: string | null;
  team?: string;
  title: string;
  updated?: number;
  userId?: string;
  username?: string | null;
};

export const userprofileobjectSchema: Schema<Userprofileobject> = s.object<Userprofileobject>({
  alwaysActive: s.optional(s.boolean()),
  apiAppId: s.optional(s.string()),
  avatarHash: s.string(),
  botId: s.optional(s.string()),
  displayName: s.string(),
  displayNameNormalized: s.string(),
  email: s.optionalNullable(s.string()),
  fields: s.nullable(s.array(s.record(s.string(), s.unknown()))),
  firstName: s.optionalNullable(s.string()),
  guestExpirationTs: s.optionalNullable(s.int()),
  guestInvitedBy: s.optionalNullable(s.string()),
  image1024: s.optionalNullable(s.string()),
  image192: s.optionalNullable(s.string()),
  image24: s.optionalNullable(s.string()),
  image32: s.optionalNullable(s.string()),
  image48: s.optionalNullable(s.string()),
  image512: s.optionalNullable(s.string()),
  image72: s.optionalNullable(s.string()),
  imageOriginal: s.optionalNullable(s.string()),
  isAppUser: s.optional(s.boolean()),
  isCustomImage: s.optional(s.boolean()),
  isRestricted: s.optionalNullable(s.boolean()),
  isUltraRestricted: s.optionalNullable(s.boolean()),
  lastAvatarImageHash: s.optional(s.string()),
  lastName: s.optionalNullable(s.string()),
  membershipsCount: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  phone: s.string(),
  pronouns: s.optional(s.string()),
  realName: s.string(),
  realNameNormalized: s.string(),
  skype: s.string(),
  statusDefaultEmoji: s.optional(s.string()),
  statusDefaultText: s.optional(s.string()),
  statusDefaultTextCanonical: s.optionalNullable(s.string()),
  statusEmoji: s.string(),
  statusExpiration: s.optional(s.int()),
  statusText: s.string(),
  statusTextCanonical: s.optionalNullable(s.string()),
  team: s.optional(s.string()),
  title: s.string(),
  updated: s.optional(s.int()),
  userId: s.optional(s.string()),
  username: s.optionalNullable(s.string()),
  _keysMap: {
    alwaysActive: "always_active",
    apiAppId: "api_app_id",
    avatarHash: "avatar_hash",
    botId: "bot_id",
    displayName: "display_name",
    displayNameNormalized: "display_name_normalized",
    firstName: "first_name",
    guestExpirationTs: "guest_expiration_ts",
    guestInvitedBy: "guest_invited_by",
    image1024: "image_1024",
    image192: "image_192",
    image24: "image_24",
    image32: "image_32",
    image48: "image_48",
    image512: "image_512",
    image72: "image_72",
    imageOriginal: "image_original",
    isAppUser: "is_app_user",
    isCustomImage: "is_custom_image",
    isRestricted: "is_restricted",
    isUltraRestricted: "is_ultra_restricted",
    lastAvatarImageHash: "last_avatar_image_hash",
    lastName: "last_name",
    membershipsCount: "memberships_count",
    realName: "real_name",
    realNameNormalized: "real_name_normalized",
    statusDefaultEmoji: "status_default_emoji",
    statusDefaultText: "status_default_text",
    statusDefaultTextCanonical: "status_default_text_canonical",
    statusEmoji: "status_emoji",
    statusExpiration: "status_expiration",
    statusText: "status_text",
    statusTextCanonical: "status_text_canonical",
    userId: "user_id",
  },
});
