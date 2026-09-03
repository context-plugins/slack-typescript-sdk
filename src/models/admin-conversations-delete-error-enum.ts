import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsDeleteErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NotAnAdmin: "not_an_admin",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  DefaultOrgWideChannel: "default_org_wide_channel",
  RestrictedAction: "restricted_action",
  CouldNotDeleteChannel: "could_not_delete_channel",
  MissingScope: "missing_scope",
} as const;
export type AdminConversationsDeleteErrorEnum =
  | (typeof AdminConversationsDeleteErrorEnum)[keyof typeof AdminConversationsDeleteErrorEnum]
  | (string & {});

export const adminConversationsDeleteErrorEnumSchema: EnumSchema<AdminConversationsDeleteErrorEnum> =
  s.enumOf<AdminConversationsDeleteErrorEnum>(AdminConversationsDeleteErrorEnum);
