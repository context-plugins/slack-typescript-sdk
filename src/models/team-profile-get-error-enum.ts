import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TeamProfileGetErrorEnum = {
  NotAuthed: "not_authed",
  InvalidAuth: "invalid_auth",
  AccountInactive: "account_inactive",
  NoPermission: "no_permission",
  UserIsBot: "user_is_bot",
  InvalidArgName: "invalid_arg_name",
  InvalidArrayArg: "invalid_array_arg",
  InvalidCharset: "invalid_charset",
  InvalidFormData: "invalid_form_data",
  InvalidPostTyp: "invalid_post_typ",
  MissingPostType: "missing_post_type",
  TeamAddedToOrg: "team_added_to_org",
  InvalidJson: "invalid_json",
  JsonNotObject: "json_not_object",
  RequestTimeou: "request_timeou",
  UpgradeRequired: "upgrade_required",
} as const;
export type TeamProfileGetErrorEnum =
  | (typeof TeamProfileGetErrorEnum)[keyof typeof TeamProfileGetErrorEnum]
  | (string & {});

export const teamProfileGetErrorEnumSchema: EnumSchema<TeamProfileGetErrorEnum> =
  s.enumOf<TeamProfileGetErrorEnum>(TeamProfileGetErrorEnum);
