import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReactionsRemoveErrorEnum = {
  BadTimestamp: "bad_timestamp",
  FileNotFound: "file_not_found",
  FileCommentNotFound: "file_comment_not_found",
  MessageNotFound: "message_not_found",
  NoItemSpecified: "no_item_specified",
  InvalidName: "invalid_name",
  NoReaction: "no_reaction",
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
export type ReactionsRemoveErrorEnum =
  | (typeof ReactionsRemoveErrorEnum)[keyof typeof ReactionsRemoveErrorEnum]
  | (string & {});

export const reactionsRemoveErrorEnumSchema: EnumSchema<ReactionsRemoveErrorEnum> =
  s.enumOf<ReactionsRemoveErrorEnum>(ReactionsRemoveErrorEnum);
