import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsRemoveErrorEnumSchema, type PinsRemoveErrorEnum } from "./pins-remove-error-enum.js";

export type PinsRemoveerrorschema1 = {
  callstack?: string;
  error: PinsRemoveErrorEnum;
  ok: "False";
};

export const pinsRemoveerrorschema1Schema: Schema<PinsRemoveerrorschema1> = s.object<PinsRemoveerrorschema1>({
  callstack: s.optional(s.string()),
  error: pinsRemoveErrorEnumSchema,
  ok: s.literal("False"),
});
