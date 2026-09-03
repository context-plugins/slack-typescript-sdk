import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsersConversationsErrorEnum = {
  MethodNotSupportedForChannelType: "method_not_supported_for_channel_type",
  MissingScope: "missing_scope",
  InvalidTypes: "invalid_types",
  InvalidCursor: "invalid_cursor",
  InvalidLimit: "invalid_limit",
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
export type UsersConversationsErrorEnum =
  | (typeof UsersConversationsErrorEnum)[keyof typeof UsersConversationsErrorEnum]
  | (string & {});

export const usersConversationsErrorEnumSchema: EnumSchema<UsersConversationsErrorEnum> =
  s.enumOf<UsersConversationsErrorEnum>(UsersConversationsErrorEnum);
