import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pinsRemoveErrorEnumSchema, type PinsRemoveErrorEnum } from "./pins-remove-error-enum.js";

/** Schema for error response from pins.remove method */
export type PinsRemoveerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: PinsRemoveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinsRemoveerrorschema1ErrorSchema: Schema<PinsRemoveerrorschema1Error> =
  s.object<PinsRemoveerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: pinsRemoveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
