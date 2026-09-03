import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilesCommentsDeleteErrorEnum = {
  CantDelete: "cant_delete",
  CommentNotFound: "comment_not_found",
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
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeout: "request_timeout",
  UpgradeRequired: "upgrade_required",
} as const;
export type FilesCommentsDeleteErrorEnum =
  | (typeof FilesCommentsDeleteErrorEnum)[keyof typeof FilesCommentsDeleteErrorEnum]
  | (string & {});

export const filesCommentsDeleteErrorEnumSchema: EnumSchema<FilesCommentsDeleteErrorEnum> =
  s.enumOf<FilesCommentsDeleteErrorEnum>(FilesCommentsDeleteErrorEnum);
