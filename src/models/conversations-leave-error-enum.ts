import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationsLeaveErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  LastMember: "last_member",
  MissingScope: "missing_scope",
  ChannelNotFound: "channel_not_found",
  IsArchived: "is_archived",
  CantLeaveGeneral: "cant_leave_general",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  UserIsBot: "user_is_bot",
  UserIsRestricted: "user_is_restricted",
  UserIsUltraRestricted: "user_is_ultra_restricted",
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
  TeamAddedToOrg: "team_added_to_org",
  MissingCharset: "missing_charset",
  SuperfluousCharset: "superfluous_charset",
} as const;
export type ConversationsLeaveErrorEnum =
  | (typeof ConversationsLeaveErrorEnum)[keyof typeof ConversationsLeaveErrorEnum]
  | (string & {});

export const conversationsLeaveErrorEnumSchema: EnumSchema<ConversationsLeaveErrorEnum> =
  s.enumOf<ConversationsLeaveErrorEnum>(ConversationsLeaveErrorEnum);
