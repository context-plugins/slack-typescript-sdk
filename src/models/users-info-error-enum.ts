import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsersInfoErrorEnum = {
  UserNotFound: "user_not_found",
  UserNotVisible: "user_not_visible",
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
export type UsersInfoErrorEnum = (typeof UsersInfoErrorEnum)[keyof typeof UsersInfoErrorEnum] | (string & {});

export const usersInfoErrorEnumSchema: EnumSchema<UsersInfoErrorEnum> =
  s.enumOf<UsersInfoErrorEnum>(UsersInfoErrorEnum);
