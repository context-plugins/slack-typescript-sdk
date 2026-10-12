import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from reactions.remove method */
export type ReactionsRemoveschema = {
  ok: boolean;
};

export const reactionsRemoveschemaSchema: Schema<ReactionsRemoveschema> = s.object<ReactionsRemoveschema>({
  ok: s.boolean(),
});
