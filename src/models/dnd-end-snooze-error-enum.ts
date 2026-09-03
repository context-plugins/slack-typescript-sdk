import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DndEndSnoozeErrorEnum = {
  SnoozeNotActive: "snooze_not_active",
  SnoozeEndFailed: "snooze_end_failed",
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  TokenRevoked: "token_revoked",
  NoPermission: "no_permission",
  OrgLoginRequired: "org_login_required",
  UserIsBot: "user_is_bot",
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
export type DndEndSnoozeErrorEnum =
  | (typeof DndEndSnoozeErrorEnum)[keyof typeof DndEndSnoozeErrorEnum]
  | (string & {});

export const dndEndSnoozeErrorEnumSchema: EnumSchema<DndEndSnoozeErrorEnum> =
  s.enumOf<DndEndSnoozeErrorEnum>(DndEndSnoozeErrorEnum);
