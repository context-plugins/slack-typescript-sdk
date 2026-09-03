import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PinsRemoveErrorEnum = {
  BadTimestamp: "bad_timestamp",
  FileNotFound: "file_not_found",
  FileCommentNotFound: "file_comment_not_found",
  MessageNotFound: "message_not_found",
  NoItemSpecified: "no_item_specified",
  NotPinned: "not_pinned",
  PermissionDenied: "permission_denied",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  NoPermission: "no_permission",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostTyp: "invalid_post_typ",
  MissingPostTyp: "missing_post_typ",
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeou: "request_timeou",
  UpgradeRequired: "upgrade_required",
} as const;
export type PinsRemoveErrorEnum =
  | (typeof PinsRemoveErrorEnum)[keyof typeof PinsRemoveErrorEnum]
  | (string & {});

export const pinsRemoveErrorEnumSchema: EnumSchema<PinsRemoveErrorEnum> =
  s.enumOf<PinsRemoveErrorEnum>(PinsRemoveErrorEnum);
