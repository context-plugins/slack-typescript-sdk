import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthTestErrorEnum = {
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  TokenRevoked: "token_revoked",
  AccountInactive: "account_inactive",
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
} as const;
export type AuthTestErrorEnum = (typeof AuthTestErrorEnum)[keyof typeof AuthTestErrorEnum] | (string & {});

export const authTestErrorEnumSchema: EnumSchema<AuthTestErrorEnum> =
  s.enumOf<AuthTestErrorEnum>(AuthTestErrorEnum);
