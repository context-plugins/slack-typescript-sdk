import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reactionsListErrorEnumSchema, type ReactionsListErrorEnum } from "./reactions-list-error-enum.js";

/** Schema for error response from reactions.list method */
export type ReactionsListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsListErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsListerrorschema1Schema: Schema<ReactionsListerrorschema1> =
  s.object<ReactionsListerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: reactionsListErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
