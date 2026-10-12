import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from migration.exchange method */
export type MigrationExchangesuccessschema = {
  enterpriseId: string;
  invalidUserIds?: string[];
  ok: boolean;
  teamId: string;
  userIdMap?: Record<string, unknown>;
};

export const migrationExchangesuccessschemaSchema: Schema<MigrationExchangesuccessschema> =
  s.object<MigrationExchangesuccessschema>({
    enterpriseId: s.string(),
    invalidUserIds: s.optional(s.array(s.string())),
    ok: s.boolean(),
    teamId: s.string(),
    userIdMap: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      enterpriseId: "enterprise_id",
      invalidUserIds: "invalid_user_ids",
      teamId: "team_id",
      userIdMap: "user_id_map",
    },
  });
