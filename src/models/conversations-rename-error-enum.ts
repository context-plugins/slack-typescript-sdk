import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsRenameErrorEnum = {
  UserIsRestricted: "user_is_restricted",
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  NotInChannel: "not_in_channel",
  NotAuthorized: "not_authorized",
  InvalidName: "invalid_name",
  NameTaken: "name_taken",
  InvalidNameRequired: "invalid_name_required",
  InvalidNamePunctuation: "invalid_name_punctuation",
  InvalidNameMaxlength: "invalid_name_maxlength",
  InvalidNameSpecials: "invalid_name_specials",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
} as const;
export type ConversationsRenameErrorEnum =
  | (typeof ConversationsRenameErrorEnum)[keyof typeof ConversationsRenameErrorEnum]
  | (string & {});

export const conversationsRenameErrorEnumSchema: EnumSchema<ConversationsRenameErrorEnum> =
  s.enumOf<ConversationsRenameErrorEnum>(ConversationsRenameErrorEnum);
