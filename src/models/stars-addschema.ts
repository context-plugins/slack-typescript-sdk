import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from stars.add method */
export type StarsAddschema = {
  ok: boolean;
};

export const starsAddschemaSchema: Schema<StarsAddschema> = s.object<StarsAddschema>({
  ok: s.boolean(),
});
