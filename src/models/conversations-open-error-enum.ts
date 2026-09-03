import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsOpenErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  UserNotFound: "user_not_found",
  UserNotVisible: "user_not_visible",
  UserDisabled: "user_disabled",
  UsersListNotSupplied: "users_list_not_supplied",
  NotEnoughUsers: "not_enough_users",
  TooManyUsers: "too_many_users",
  InvalidUserCombination: "invalid_user_combination",
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
  ChannelNotFound: "channel_not_found",
} as const;
export type ConversationsOpenErrorEnum =
  | (typeof ConversationsOpenErrorEnum)[keyof typeof ConversationsOpenErrorEnum]
  | (string & {});

export const conversationsOpenErrorEnumSchema: EnumSchema<ConversationsOpenErrorEnum> =
  s.enumOf<ConversationsOpenErrorEnum>(ConversationsOpenErrorEnum);
