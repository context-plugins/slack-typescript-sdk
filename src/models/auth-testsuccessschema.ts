import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthTestsuccessschema = {
  botId?: string;
  isEnterpriseInstall?: boolean;
  ok: "True";
  team: string;
  teamId: string;
  url: string;
  user: string;
  userId: string;
};

export const authTestsuccessschemaSchema: Schema<AuthTestsuccessschema> = s.object<AuthTestsuccessschema>({
  botId: s.optional(s.string()),
  isEnterpriseInstall: s.optional(s.boolean()),
  ok: s.literal("True"),
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
});
