import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsMarkErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  InvalidTimestamp: "invalid_timestamp",
  NotInChannel: "not_in_channel",
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
  NotAllowedTokenType: "not_allowed_token_type",
} as const;
export type ConversationsMarkErrorEnum =
  | (typeof ConversationsMarkErrorEnum)[keyof typeof ConversationsMarkErrorEnum]
  | (string & {});

export const conversationsMarkErrorEnumSchema: EnumSchema<ConversationsMarkErrorEnum> =
  s.enumOf<ConversationsMarkErrorEnum>(ConversationsMarkErrorEnum);
