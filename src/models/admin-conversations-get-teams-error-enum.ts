import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsGetTeamsErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  ChannelNotFound: "channel_not_found",
  ChannelTypeNotSupported: "channel_type_not_supported",
  UnsupportedTeamType: "unsupported_team_type",
  RestrictedAction: "restricted_action",
  CouldNotGetTeams: "could_not_get_teams",
  InvalidCursor: "invalid_cursor",
  InvalidLimit: "invalid_limit",
} as const;
export type AdminConversationsGetTeamsErrorEnum =
  | (typeof AdminConversationsGetTeamsErrorEnum)[keyof typeof AdminConversationsGetTeamsErrorEnum]
  | (string & {});

export const adminConversationsGetTeamsErrorEnumSchema: EnumSchema<AdminConversationsGetTeamsErrorEnum> =
  s.enumOf<AdminConversationsGetTeamsErrorEnum>(AdminConversationsGetTeamsErrorEnum);
