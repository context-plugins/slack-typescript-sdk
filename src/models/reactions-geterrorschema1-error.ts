import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reactionsGetErrorEnumSchema, type ReactionsGetErrorEnum } from "./reactions-get-error-enum.js";

/** Schema for error response from reactions.get method */
export type ReactionsGeterrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsGetErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsGeterrorschema1ErrorSchema: Schema<ReactionsGeterrorschema1Error> =
  s.object<ReactionsGeterrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: reactionsGetErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
