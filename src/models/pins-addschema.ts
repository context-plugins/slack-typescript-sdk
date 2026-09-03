import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PinsAddschema = {
  ok: "True";
};

export const pinsAddschemaSchema: Schema<PinsAddschema> = s.object<PinsAddschema>({
  ok: s.literal("True"),
});
