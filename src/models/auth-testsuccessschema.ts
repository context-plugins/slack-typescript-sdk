import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response auth.test method */
export type AuthTestsuccessschema = {
  botId?: string;
  isEnterpriseInstall?: boolean;
  ok: boolean;
  team: string;
  teamId: string;
  url: string;
  user: string;
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authTestsuccessschemaProperties: s.Shape<AuthTestsuccessschema> = {
  botId: s.optional(s.string()),
  isEnterpriseInstall: s.optional(s.boolean()),
  ok: s.boolean(),
  team: s.string(),
  teamId: s.string(),
  url: s.string(),
  user: s.string(),
  userId: s.string(),
  _keysMap: {
    botId: "bot_id",
    isEnterpriseInstall: "is_enterprise_install",
    teamId: "team_id",
    userId: "user_id",
  },
};

export const authTestsuccessschemaInternalSchema: Schema<AuthTestsuccessschema> =
  s.object<AuthTestsuccessschema>(authTestsuccessschemaProperties, { additionalProperties: s.json() });

export const authTestsuccessschemaSchema: Schema<AuthTestsuccessschema> = s.lazySchema(() =>
  s.object<AuthTestsuccessschema>(
    {
      ...authTestsuccessschemaProperties,
      botId: s.optional(s.string().check(s.pattern("^B[A-Z0-9]{8,}$"))),
      teamId: s.string().check(s.pattern("^[T][A-Z0-9]{2,}$")),
      userId: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
