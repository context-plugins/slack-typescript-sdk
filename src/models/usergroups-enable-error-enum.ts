import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsergroupsEnableErrorEnum = {
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  OrgLoginRequired: "org_login_required",
  UserIsBot: "user_is_bot",
  UserIsRestricted: "user_is_restricted",
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
  UpgradeRequire: "upgrade_require",
  FatalError: "fatal_error",
  MissingCharset: "missing_charset",
  SuperfluousCharset: "superfluous_charset",
} as const;
export type UsergroupsEnableErrorEnum =
  | (typeof UsergroupsEnableErrorEnum)[keyof typeof UsergroupsEnableErrorEnum]
  | (string & {});

export const usergroupsEnableErrorEnumSchema: EnumSchema<UsergroupsEnableErrorEnum> =
  s.enumOf<UsergroupsEnableErrorEnum>(UsergroupsEnableErrorEnum);
