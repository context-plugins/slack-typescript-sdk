import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PinsAddErrorEnum = {
  BadTimestamp: "bad_timestamp",
  MessageNotFound: "message_not_found",
  ChannelNotFound: "channel_not_found",
  NoItemSpecified: "no_item_specified",
  AlreadyPinned: "already_pinned",
  PermissionDenied: "permission_denied",
  FileNotShared: "file_not_shared",
  NotPinnable: "not_pinnable",
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
export type PinsAddErrorEnum = (typeof PinsAddErrorEnum)[keyof typeof PinsAddErrorEnum] | (string & {});

export const pinsAddErrorEnumSchema: EnumSchema<PinsAddErrorEnum> =
  s.enumOf<PinsAddErrorEnum>(PinsAddErrorEnum);
