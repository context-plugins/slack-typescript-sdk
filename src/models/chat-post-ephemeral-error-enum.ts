import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatPostEphemeralErrorEnum = {
  ChannelNotFound: "channel_not_found",
  IsArchived: "is_archived",
  MsgTooLong: "msg_too_long",
  NoText: "no_text",
  RestrictedAction: "restricted_action",
  TooManyAttachments: "too_many_attachments",
  UserNotInChannel: "user_not_in_channel",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  OrgLoginRequired: "org_login_required",
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
  FatalError: "fatal_error",
} as const;
export type ChatPostEphemeralErrorEnum =
  | (typeof ChatPostEphemeralErrorEnum)[keyof typeof ChatPostEphemeralErrorEnum]
  | (string & {});

export const chatPostEphemeralErrorEnumSchema: EnumSchema<ChatPostEphemeralErrorEnum> =
  s.enumOf<ChatPostEphemeralErrorEnum>(ChatPostEphemeralErrorEnum);
