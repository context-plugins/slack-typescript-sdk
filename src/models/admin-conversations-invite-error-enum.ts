import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsInviteErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  DefaultOrgWideChannel: "default_org_wide_channel",
  RestrictedAction: "restricted_action",
  UserMustBeAdmin: "user_must_be_admin",
  FailedForSomeUsers: "failed_for_some_users",
} as const;
export type AdminConversationsInviteErrorEnum =
  | (typeof AdminConversationsInviteErrorEnum)[keyof typeof AdminConversationsInviteErrorEnum]
  | (string & {});

export const adminConversationsInviteErrorEnumSchema: EnumSchema<AdminConversationsInviteErrorEnum> =
  s.enumOf<AdminConversationsInviteErrorEnum>(AdminConversationsInviteErrorEnum);
