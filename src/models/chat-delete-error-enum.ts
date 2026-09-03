import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChatDeleteErrorEnum = {
  MessageNotFound: "message_not_found",
  ChannelNotFound: "channel_not_found",
  CantDeleteMessage: "cant_delete_message",
  ComplianceExportsPreventDeletion: "compliance_exports_prevent_deletion",
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
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
  FatalError: "fatal_error",
} as const;
export type ChatDeleteErrorEnum =
  | (typeof ChatDeleteErrorEnum)[keyof typeof ChatDeleteErrorEnum]
  | (string & {});

export const chatDeleteErrorEnumSchema: EnumSchema<ChatDeleteErrorEnum> =
  s.enumOf<ChatDeleteErrorEnum>(ChatDeleteErrorEnum);
