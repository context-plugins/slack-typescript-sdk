import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatPostMessageErrorEnum = {
  ChannelNotFound: "channel_not_found",
  NotInChannel: "not_in_channel",
  IsArchived: "is_archived",
  MsgTooLong: "msg_too_long",
  NoText: "no_text",
  TooManyAttachments: "too_many_attachments",
  RateLimited: "rate_limited",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
} as const;
export type ChatPostMessageErrorEnum =
  | (typeof ChatPostMessageErrorEnum)[keyof typeof ChatPostMessageErrorEnum]
  | (string & {});

export const chatPostMessageErrorEnumSchema: EnumSchema<ChatPostMessageErrorEnum> =
  s.enumOf<ChatPostMessageErrorEnum>(ChatPostMessageErrorEnum);
