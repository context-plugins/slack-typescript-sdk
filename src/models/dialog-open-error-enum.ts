import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DialogOpenErrorEnum = {
  ValidationErrors: "validation_errors",
  MissingTrigger: "missing_trigger",
  MissingDialog: "missing_dialog",
  TriggerExchanged: "trigger_exchanged",
  TriggerExpired: "trigger_expired",
  InvalidTrigger: "invalid_trigger",
  AppMissingActionUrl: "app_missing_action_url",
  CannotCreateDialog: "cannot_create_dialog",
  FailedSendingDialog: "failed_sending_dialog",
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
export type DialogOpenErrorEnum =
  | (typeof DialogOpenErrorEnum)[keyof typeof DialogOpenErrorEnum]
  | (string & {});

export const dialogOpenErrorEnumSchema: EnumSchema<DialogOpenErrorEnum> =
  s.enumOf<DialogOpenErrorEnum>(DialogOpenErrorEnum);
