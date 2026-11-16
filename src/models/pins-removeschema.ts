import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from pins.remove method */
export type PinsRemoveschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinsRemoveschemaSchema: Schema<PinsRemoveschema> = s.object<PinsRemoveschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
