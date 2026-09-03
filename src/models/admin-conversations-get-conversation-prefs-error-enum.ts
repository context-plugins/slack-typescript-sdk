import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsGetConversationPrefsErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NotAnAdmin: "not_an_admin",
  NotAnEnterprise: "not_an_enterprise",
  RestrictedAction: "restricted_action",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  CouldNotGetConversationPrefs: "could_not_get_conversation_prefs",
} as const;
export type AdminConversationsGetConversationPrefsErrorEnum =
  | (typeof AdminConversationsGetConversationPrefsErrorEnum)[keyof typeof AdminConversationsGetConversationPrefsErrorEnum]
  | (string & {});

export const adminConversationsGetConversationPrefsErrorEnumSchema: EnumSchema<AdminConversationsGetConversationPrefsErrorEnum> =
  s.enumOf<AdminConversationsGetConversationPrefsErrorEnum>(AdminConversationsGetConversationPrefsErrorEnum);
