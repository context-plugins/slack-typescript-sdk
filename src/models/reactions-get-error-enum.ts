import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReactionsGetErrorEnum = {
  BadTimestamp: "bad_timestamp",
  FileNotFound: "file_not_found",
  FileCommentNotFound: "file_comment_not_found",
  MessageNotFound: "message_not_found",
  NoItemSpecified: "no_item_specified",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  NoPermission: "no_permission",
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
export type ReactionsGetErrorEnum =
  | (typeof ReactionsGetErrorEnum)[keyof typeof ReactionsGetErrorEnum]
  | (string & {});

export const reactionsGetErrorEnumSchema: EnumSchema<ReactionsGetErrorEnum> =
  s.enumOf<ReactionsGetErrorEnum>(ReactionsGetErrorEnum);
