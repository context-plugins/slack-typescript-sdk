import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from stars.remove method */
export type StarsRemoveschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const starsRemoveschemaSchema: Schema<StarsRemoveschema> = s.object<StarsRemoveschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
