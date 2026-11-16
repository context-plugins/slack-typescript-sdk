import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from reactions.remove method */
export type ReactionsRemoveschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsRemoveschemaSchema: Schema<ReactionsRemoveschema> = s.object<ReactionsRemoveschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
