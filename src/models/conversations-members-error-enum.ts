import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsMembersErrorEnum = {
  ChannelNotFound: "channel_not_found",
  InvalidLimit: "invalid_limit",
  InvalidCursor: "invalid_cursor",
  FetchMembersFailed: "fetch_members_failed",
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
export type ConversationsMembersErrorEnum =
  | (typeof ConversationsMembersErrorEnum)[keyof typeof ConversationsMembersErrorEnum]
  | (string & {});

export const conversationsMembersErrorEnumSchema: EnumSchema<ConversationsMembersErrorEnum> =
  s.enumOf<ConversationsMembersErrorEnum>(ConversationsMembersErrorEnum);
