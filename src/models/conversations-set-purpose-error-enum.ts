import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsSetPurposeErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  NotInChannel: "not_in_channel",
  IsArchived: "is_archived",
  TooLong: "too_long",
  UserIsRestricted: "user_is_restricted",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
} as const;
export type ConversationsSetPurposeErrorEnum =
  | (typeof ConversationsSetPurposeErrorEnum)[keyof typeof ConversationsSetPurposeErrorEnum]
  | (string & {});

export const conversationsSetPurposeErrorEnumSchema: EnumSchema<ConversationsSetPurposeErrorEnum> =
  s.enumOf<ConversationsSetPurposeErrorEnum>(ConversationsSetPurposeErrorEnum);
