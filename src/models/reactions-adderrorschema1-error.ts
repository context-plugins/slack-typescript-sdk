import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reactionsAddErrorEnumSchema, type ReactionsAddErrorEnum } from "./reactions-add-error-enum.js";

/** Schema for error response from reactions.add method */
export type ReactionsAdderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsAddErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsAdderrorschema1ErrorSchema: Schema<ReactionsAdderrorschema1Error> =
  s.object<ReactionsAdderrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: reactionsAddErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
