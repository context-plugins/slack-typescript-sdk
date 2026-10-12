import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  migrationExchangeErrorEnumSchema,
  type MigrationExchangeErrorEnum,
} from "./migration-exchange-error-enum.js";

/** Schema for error response from migration.exchange method */
export type MigrationExchangeerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: MigrationExchangeErrorEnum;
  ok: boolean;
};

export const migrationExchangeerrorschema1Schema: Schema<MigrationExchangeerrorschema1> =
  s.object<MigrationExchangeerrorschema1>({
    callstack: s.optional(s.string()),
    error: migrationExchangeErrorEnumSchema,
    ok: s.boolean(),
  });
