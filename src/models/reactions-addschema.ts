import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from reactions.add method */
export type ReactionsAddschema = {
  ok: boolean;
};

export const reactionsAddschemaSchema: Schema<ReactionsAddschema> = s.object<ReactionsAddschema>({
  ok: s.boolean(),
});
