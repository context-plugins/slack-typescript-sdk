import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsHistoryErrorEnum = {
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  InvalidTsLatest: "invalid_ts_latest",
  InvalidTsOldest: "invalid_ts_oldest",
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
export type ConversationsHistoryErrorEnum =
  | (typeof ConversationsHistoryErrorEnum)[keyof typeof ConversationsHistoryErrorEnum]
  | (string & {});

export const conversationsHistoryErrorEnumSchema: EnumSchema<ConversationsHistoryErrorEnum> =
  s.enumOf<ConversationsHistoryErrorEnum>(ConversationsHistoryErrorEnum);
