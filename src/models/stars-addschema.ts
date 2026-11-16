import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from stars.add method */
export type StarsAddschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const starsAddschemaSchema: Schema<StarsAddschema> = s.object<StarsAddschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
