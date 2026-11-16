import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from pins.add method */
export type PinsAddschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinsAddschemaSchema: Schema<PinsAddschema> = s.object<PinsAddschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
