import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StarsAddschema = {
  ok: "True";
};

export const starsAddschemaSchema: Schema<StarsAddschema> = s.object<StarsAddschema>({
  ok: s.literal("True"),
});
