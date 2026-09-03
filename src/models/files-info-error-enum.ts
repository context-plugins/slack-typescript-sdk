import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilesInfoErrorEnum = {
  FileNotFound: "file_not_found",
  FileDeleted: "file_deleted",
  TimezoneCountFailed: "timezone_count_failed",
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
} as const;
export type FilesInfoErrorEnum = (typeof FilesInfoErrorEnum)[keyof typeof FilesInfoErrorEnum] | (string & {});

export const filesInfoErrorEnumSchema: EnumSchema<FilesInfoErrorEnum> =
  s.enumOf<FilesInfoErrorEnum>(FilesInfoErrorEnum);
