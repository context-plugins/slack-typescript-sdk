import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsCloseErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  ChannelNotFound: "channel_not_found",
  UserDoesNotOwnChannel: "user_does_not_own_channel",
  MissingScope: "missing_scope",
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
export type ConversationsCloseErrorEnum =
  | (typeof ConversationsCloseErrorEnum)[keyof typeof ConversationsCloseErrorEnum]
  | (string & {});

export const conversationsCloseErrorEnumSchema: EnumSchema<ConversationsCloseErrorEnum> =
  s.enumOf<ConversationsCloseErrorEnum>(ConversationsCloseErrorEnum);
