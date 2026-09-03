import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatScheduleMessageErrorEnum = {
  InvalidTime: "invalid_time",
  TimeInPast: "time_in_past",
  TimeTooFar: "time_too_far",
  ChannelNotFound: "channel_not_found",
  NotInChannel: "not_in_channel",
  IsArchived: "is_archived",
  MsgTooLong: "msg_too_long",
  NoText: "no_text",
  RestrictedAction: "restricted_action",
  RestrictedActionReadOnlyChannel: "restricted_action_read_only_channel",
  RestrictedActionThreadOnlyChannel: "restricted_action_thread_only_channel",
  RestrictedActionNonThreadableChannel: "restricted_action_non_threadable_channel",
  TooManyAttachments: "too_many_attachments",
  RateLimited: "rate_limited",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  OrgLoginRequired: "org_login_required",
  EkmAccessDenied: "ekm_access_denied",
  MissingScope: "missing_scope",
  InvalidArguments: "invalid_arguments",
  InvalidArgName: "invalid_arg_name",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostType: "invalid_post_type",
  MissingPostType: "missing_post_type",
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
  FatalError: "fatal_error",
} as const;
export type ChatScheduleMessageErrorEnum =
  | (typeof ChatScheduleMessageErrorEnum)[keyof typeof ChatScheduleMessageErrorEnum]
  | (string & {});

export const chatScheduleMessageErrorEnumSchema: EnumSchema<ChatScheduleMessageErrorEnum> =
  s.enumOf<ChatScheduleMessageErrorEnum>(ChatScheduleMessageErrorEnum);
