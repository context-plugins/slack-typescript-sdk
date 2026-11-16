import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from reactions.add method */
export type ReactionsAddschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsAddschemaSchema: Schema<ReactionsAddschema> = s.object<ReactionsAddschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
