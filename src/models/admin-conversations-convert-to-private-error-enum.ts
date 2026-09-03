import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsConvertToPrivateErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  RestrictedAction: "restricted_action",
  NameTaken: "name_taken",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  DefaultOrgWideChannel: "default_org_wide_channel",
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  CouldNotConvertChannel: "could_not_convert_channel",
  ExternalChannelMigrating: "external_channel_migrating",
} as const;
export type AdminConversationsConvertToPrivateErrorEnum =
  | (typeof AdminConversationsConvertToPrivateErrorEnum)[keyof typeof AdminConversationsConvertToPrivateErrorEnum]
  | (string & {});

export const adminConversationsConvertToPrivateErrorEnumSchema: EnumSchema<AdminConversationsConvertToPrivateErrorEnum> =
  s.enumOf<AdminConversationsConvertToPrivateErrorEnum>(AdminConversationsConvertToPrivateErrorEnum);
