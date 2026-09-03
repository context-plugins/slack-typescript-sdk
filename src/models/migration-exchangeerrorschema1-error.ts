import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  migrationExchangeErrorEnumSchema,
  type MigrationExchangeErrorEnum,
} from "./migration-exchange-error-enum.js";

export type MigrationExchangeerrorschema1Error = {
  callstack?: string;
  error: MigrationExchangeErrorEnum;
  ok: "False";
};

export const migrationExchangeerrorschema1ErrorSchema: Schema<MigrationExchangeerrorschema1Error> =
  s.object<MigrationExchangeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: migrationExchangeErrorEnumSchema,
    ok: s.literal("False"),
  });
