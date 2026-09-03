import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsCreateErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  NameTaken: "name_taken",
  RestrictedAction: "restricted_action",
  NoChannel: "no_channel",
  InvalidNameRequired: "invalid_name_required",
  InvalidNamePunctuation: "invalid_name_punctuation",
  InvalidNameMaxlength: "invalid_name_maxlength",
  InvalidNameSpecials: "invalid_name_specials",
  InvalidName: "invalid_name",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  UserIsBot: "user_is_bot",
  UserIsRestricted: "user_is_restricted",
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
export type ConversationsCreateErrorEnum =
  | (typeof ConversationsCreateErrorEnum)[keyof typeof ConversationsCreateErrorEnum]
  | (string & {});

export const conversationsCreateErrorEnumSchema: EnumSchema<ConversationsCreateErrorEnum> =
  s.enumOf<ConversationsCreateErrorEnum>(ConversationsCreateErrorEnum);
