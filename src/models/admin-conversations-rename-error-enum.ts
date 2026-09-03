import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsRenameErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  RestrictedAction: "restricted_action",
  CouldNotRenameChannel: "could_not_rename_channel",
  DefaultOrgWideChannel: "default_org_wide_channel",
  NameTaken: "name_taken",
} as const;
export type AdminConversationsRenameErrorEnum =
  | (typeof AdminConversationsRenameErrorEnum)[keyof typeof AdminConversationsRenameErrorEnum]
  | (string & {});

export const adminConversationsRenameErrorEnumSchema: EnumSchema<AdminConversationsRenameErrorEnum> =
  s.enumOf<AdminConversationsRenameErrorEnum>(AdminConversationsRenameErrorEnum);
