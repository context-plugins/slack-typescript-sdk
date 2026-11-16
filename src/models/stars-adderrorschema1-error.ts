import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { starsAddErrorEnumSchema, type StarsAddErrorEnum } from "./stars-add-error-enum.js";

/** Schema for error response from stars.add method */
export type StarsAdderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: StarsAddErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const starsAdderrorschema1ErrorSchema: Schema<StarsAdderrorschema1Error> =
  s.object<StarsAdderrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: starsAddErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
