import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsCreateErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NameTaken: "name_taken",
  RestrictedAction: "restricted_action",
  TeamNotFound: "team_not_found",
  InvalidTeam: "invalid_team",
  InvalidName: "invalid_name",
  CouldNotCreateChannel: "could_not_create_channel",
  TeamIdOrOrgRequired: "team_id_or_org_required",
} as const;
export type AdminConversationsCreateErrorEnum =
  | (typeof AdminConversationsCreateErrorEnum)[keyof typeof AdminConversationsCreateErrorEnum]
  | (string & {});

export const adminConversationsCreateErrorEnumSchema: EnumSchema<AdminConversationsCreateErrorEnum> =
  s.enumOf<AdminConversationsCreateErrorEnum>(AdminConversationsCreateErrorEnum);
