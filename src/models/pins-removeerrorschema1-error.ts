import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsRemoveErrorEnumSchema, type PinsRemoveErrorEnum } from "./pins-remove-error-enum.js";

export type PinsRemoveerrorschema1Error = {
  callstack?: string;
  error: PinsRemoveErrorEnum;
  ok: "False";
};

export const pinsRemoveerrorschema1ErrorSchema: Schema<PinsRemoveerrorschema1Error> =
  s.object<PinsRemoveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: pinsRemoveErrorEnumSchema,
    ok: s.literal("False"),
  });
