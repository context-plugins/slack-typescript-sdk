import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { starsRemoveErrorEnumSchema, type StarsRemoveErrorEnum } from "./stars-remove-error-enum.js";

/** Schema for error response from stars.remove method */
export type StarsRemoveerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: StarsRemoveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const starsRemoveerrorschema1ErrorSchema: Schema<StarsRemoveerrorschema1Error> =
  s.object<StarsRemoveerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: starsRemoveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
