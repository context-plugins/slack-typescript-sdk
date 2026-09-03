import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StarsRemoveErrorEnum = {
  BadTimestamp: "bad_timestamp",
  MessageNotFound: "message_not_found",
  FileNotFound: "file_not_found",
  FileCommentNotFound: "file_comment_not_found",
  ChannelNotFound: "channel_not_found",
  NoItemSpecified: "no_item_specified",
  NotStarred: "not_starred",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  OrgLoginRequired: "org_login_required",
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
export type StarsRemoveErrorEnum =
  | (typeof StarsRemoveErrorEnum)[keyof typeof StarsRemoveErrorEnum]
  | (string & {});

export const starsRemoveErrorEnumSchema: EnumSchema<StarsRemoveErrorEnum> =
  s.enumOf<StarsRemoveErrorEnum>(StarsRemoveErrorEnum);
