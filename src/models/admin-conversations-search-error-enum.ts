import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdminConversationsSearchErrorEnum = {
  FeatureNotEnabled: "feature_not_enabled",
  NotAnAdmin: "not_an_admin",
  NotAnEnterprise: "not_an_enterprise",
  TeamNotFound: "team_not_found",
  NotAllowed: "not_allowed",
  InvalidAuth: "invalid_auth",
  InvalidCursor: "invalid_cursor",
  InvalidSearchChannelType: "invalid_search_channel_type",
  InvalidSort: "invalid_sort",
  InvalidSortDir: "invalid_sort_dir",
} as const;
export type AdminConversationsSearchErrorEnum =
  | (typeof AdminConversationsSearchErrorEnum)[keyof typeof AdminConversationsSearchErrorEnum]
  | (string & {});

export const adminConversationsSearchErrorEnumSchema: EnumSchema<AdminConversationsSearchErrorEnum> =
  s.enumOf<AdminConversationsSearchErrorEnum>(AdminConversationsSearchErrorEnum);
