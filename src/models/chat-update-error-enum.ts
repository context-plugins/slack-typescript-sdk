import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatUpdateErrorEnum = {
  MessageNotFound: "message_not_found",
  CantUpdateMessage: "cant_update_message",
  ChannelNotFound: "channel_not_found",
  EditWindowClosed: "edit_window_closed",
  MsgTooLong: "msg_too_long",
  TooManyAttachments: "too_many_attachments",
  RateLimited: "rate_limited",
  NoText: "no_text",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
  RequestTimeout: "request_timeout",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  UpgradeRequired: "upgrade_required",
  FatalError: "fatal_error",
  IsInactive: "is_inactive",
} as const;
export type ChatUpdateErrorEnum =
  | (typeof ChatUpdateErrorEnum)[keyof typeof ChatUpdateErrorEnum]
  | (string & {});

export const chatUpdateErrorEnumSchema: EnumSchema<ChatUpdateErrorEnum> =
  s.enumOf<ChatUpdateErrorEnum>(ChatUpdateErrorEnum);
