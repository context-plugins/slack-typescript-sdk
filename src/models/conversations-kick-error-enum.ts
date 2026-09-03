import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsKickErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  UserNotFound: "user_not_found",
  CantKickSelf: "cant_kick_self",
  NotInChannel: "not_in_channel",
  CantKickFromGeneral: "cant_kick_from_general",
  RestrictedAction: "restricted_action",
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
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
} as const;
export type ConversationsKickErrorEnum =
  | (typeof ConversationsKickErrorEnum)[keyof typeof ConversationsKickErrorEnum]
  | (string & {});

export const conversationsKickErrorEnumSchema: EnumSchema<ConversationsKickErrorEnum> =
  s.enumOf<ConversationsKickErrorEnum>(ConversationsKickErrorEnum);
