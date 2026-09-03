import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsArchiveErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  DefaultOrgWideChannel: "default_org_wide_channel",
  AlreadyArchived: "already_archived",
  CantArchiveGeneral: "cant_archive_general",
  RestrictedAction: "restricted_action",
  CouldNotArchiveChannel: "could_not_archive_channel",
} as const;
export type AdminConversationsArchiveErrorEnum =
  | (typeof AdminConversationsArchiveErrorEnum)[keyof typeof AdminConversationsArchiveErrorEnum]
  | (string & {});

export const adminConversationsArchiveErrorEnumSchema: EnumSchema<AdminConversationsArchiveErrorEnum> =
  s.enumOf<AdminConversationsArchiveErrorEnum>(AdminConversationsArchiveErrorEnum);
