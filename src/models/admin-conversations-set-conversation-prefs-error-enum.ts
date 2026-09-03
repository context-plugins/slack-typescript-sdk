import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsSetConversationPrefsErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NotAnAdmin: "not_an_admin",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  RestrictedAction: "restricted_action",
  MissingScope: "missing_scope",
  CouldNotSetChannelPref: "could_not_set_channel_pref",
  DefaultOrgWideChannel: "default_org_wide_channel",
} as const;
export type AdminConversationsSetConversationPrefsErrorEnum =
  | (typeof AdminConversationsSetConversationPrefsErrorEnum)[keyof typeof AdminConversationsSetConversationPrefsErrorEnum]
  | (string & {});

export const adminConversationsSetConversationPrefsErrorEnumSchema: EnumSchema<AdminConversationsSetConversationPrefsErrorEnum> =
  s.enumOf<AdminConversationsSetConversationPrefsErrorEnum>(AdminConversationsSetConversationPrefsErrorEnum);
