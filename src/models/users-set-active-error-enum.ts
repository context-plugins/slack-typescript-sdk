import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UsersSetActiveErrorEnum = {
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
  RequestTimeout: "request_timeout",
  FatalError: "fatal_error",
  InternalError: "internal_error",
} as const;
export type UsersSetActiveErrorEnum =
  | (typeof UsersSetActiveErrorEnum)[keyof typeof UsersSetActiveErrorEnum]
  | (string & {});

export const usersSetActiveErrorEnumSchema: EnumSchema<UsersSetActiveErrorEnum> =
  s.enumOf<UsersSetActiveErrorEnum>(UsersSetActiveErrorEnum);
