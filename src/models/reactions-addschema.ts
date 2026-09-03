import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReactionsAddschema = {
  ok: "True";
};

export const reactionsAddschemaSchema: Schema<ReactionsAddschema> = s.object<ReactionsAddschema>({
  ok: s.literal("True"),
});
