import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReactionsAddErrorEnum = {
  BadTimestamp: "bad_timestamp",
  MessageNotFound: "message_not_found",
  NoItemSpecified: "no_item_specified",
  InvalidName: "invalid_name",
  AlreadyReacted: "already_reacted",
  TooManyEmoji: "too_many_emoji",
  TooManyReactions: "too_many_reactions",
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
export type ReactionsAddErrorEnum =
  | (typeof ReactionsAddErrorEnum)[keyof typeof ReactionsAddErrorEnum]
  | (string & {});

export const reactionsAddErrorEnumSchema: EnumSchema<ReactionsAddErrorEnum> =
  s.enumOf<ReactionsAddErrorEnum>(ReactionsAddErrorEnum);
