import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsersListErrorEnum = {
  LimitRequired: "limit_required",
  InvalidCursor: "invalid_cursor",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
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
export type UsersListErrorEnum = (typeof UsersListErrorEnum)[keyof typeof UsersListErrorEnum] | (string & {});

export const usersListErrorEnumSchema: EnumSchema<UsersListErrorEnum> =
  s.enumOf<UsersListErrorEnum>(UsersListErrorEnum);
