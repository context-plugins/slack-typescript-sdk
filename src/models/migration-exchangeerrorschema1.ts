import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  migrationExchangeErrorEnumSchema,
  type MigrationExchangeErrorEnum,
} from "./migration-exchange-error-enum.js";

export type MigrationExchangeerrorschema1 = {
  callstack?: string;
  error: MigrationExchangeErrorEnum;
  ok: "False";
};

export const migrationExchangeerrorschema1Schema: Schema<MigrationExchangeerrorschema1> =
  s.object<MigrationExchangeerrorschema1>({
    callstack: s.optional(s.string()),
    error: migrationExchangeErrorEnumSchema,
    ok: s.literal("False"),
  });
