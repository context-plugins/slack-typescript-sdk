import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsUnarchiveErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  ChannelNotFound: "channel_not_found",
  ChannelNotArchived: "channel_not_archived",
  ChannelTypeNotSupported: "channel_type_not_supported",
  RestrictedAction: "restricted_action",
  CouldNotUnarchiveChannel: "could_not_unarchive_channel",
  DefaultOrgWideChannel: "default_org_wide_channel",
  MissingScope: "missing_scope",
} as const;
export type AdminConversationsUnarchiveErrorEnum =
  | (typeof AdminConversationsUnarchiveErrorEnum)[keyof typeof AdminConversationsUnarchiveErrorEnum]
  | (string & {});

export const adminConversationsUnarchiveErrorEnumSchema: EnumSchema<AdminConversationsUnarchiveErrorEnum> =
  s.enumOf<AdminConversationsUnarchiveErrorEnum>(AdminConversationsUnarchiveErrorEnum);
