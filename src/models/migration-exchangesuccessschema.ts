import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from migration.exchange method */
export type MigrationExchangesuccessschema = {
  enterpriseId: string;
  invalidUserIds?: string[];
  ok: boolean;
  teamId: string;
  userIdMap?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const migrationExchangesuccessschemaProperties: s.Shape<MigrationExchangesuccessschema> = {
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
};

export const migrationExchangesuccessschemaInternalSchema: Schema<MigrationExchangesuccessschema> =
  s.object<MigrationExchangesuccessschema>(migrationExchangesuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const migrationExchangesuccessschemaSchema: Schema<MigrationExchangesuccessschema> = s.lazySchema(() =>
  s.object<MigrationExchangesuccessschema>(
    {
      ...migrationExchangesuccessschemaProperties,
      teamId: s.string().check(s.pattern("^[T][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
