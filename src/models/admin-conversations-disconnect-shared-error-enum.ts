import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsDisconnectSharedErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NotAnAdmin: "not_an_admin",
  NotAnEnterprise: "not_an_enterprise",
  ChannelNotFound: "channel_not_found",
  NotSupported: "not_supported",
  TeamNotFound: "team_not_found",
  RestrictedAction: "restricted_action",
  MissingScope: "missing_scope",
  LeavingTeamNotInChannel: "leaving_team_not_in_channel",
  NoTeamsToDisconnect: "no_teams_to_disconnect",
  LeavingTeamRequired: "leaving_team_required",
  CannotKickTeam: "cannot_kick_team",
  CannotKickHomeTeam: "cannot_kick_home_team",
} as const;
export type AdminConversationsDisconnectSharedErrorEnum =
  | (typeof AdminConversationsDisconnectSharedErrorEnum)[keyof typeof AdminConversationsDisconnectSharedErrorEnum]
  | (string & {});

export const adminConversationsDisconnectSharedErrorEnumSchema: EnumSchema<AdminConversationsDisconnectSharedErrorEnum> =
  s.enumOf<AdminConversationsDisconnectSharedErrorEnum>(AdminConversationsDisconnectSharedErrorEnum);
