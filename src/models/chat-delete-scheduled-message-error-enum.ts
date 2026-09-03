import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatDeleteScheduledMessageErrorEnum = {
  InvalidScheduledMessageId: "invalid_scheduled_message_id",
  ChannelNotFound: "channel_not_found",
  BadToken: "bad_token",
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
export type ChatDeleteScheduledMessageErrorEnum =
  | (typeof ChatDeleteScheduledMessageErrorEnum)[keyof typeof ChatDeleteScheduledMessageErrorEnum]
  | (string & {});

export const chatDeleteScheduledMessageErrorEnumSchema: EnumSchema<ChatDeleteScheduledMessageErrorEnum> =
  s.enumOf<ChatDeleteScheduledMessageErrorEnum>(ChatDeleteScheduledMessageErrorEnum);
