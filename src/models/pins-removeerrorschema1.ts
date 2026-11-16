import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pinsRemoveErrorEnumSchema, type PinsRemoveErrorEnum } from "./pins-remove-error-enum.js";

/** Schema for error response from pins.remove method */
export type PinsRemoveerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: PinsRemoveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinsRemoveerrorschema1Schema: Schema<PinsRemoveerrorschema1> = s.object<PinsRemoveerrorschema1>(
  {
    callstack: s.optional(s.string()),
    error: pinsRemoveErrorEnumSchema,
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
