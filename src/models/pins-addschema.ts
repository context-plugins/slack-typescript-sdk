import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from pins.add method */
export type PinsAddschema = {
  ok: boolean;
};

export const pinsAddschemaSchema: Schema<PinsAddschema> = s.object<PinsAddschema>({
  ok: s.boolean(),
});
