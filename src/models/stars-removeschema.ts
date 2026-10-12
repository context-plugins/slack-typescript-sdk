import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from stars.remove method */
export type StarsRemoveschema = {
  ok: boolean;
};

export const starsRemoveschemaSchema: Schema<StarsRemoveschema> = s.object<StarsRemoveschema>({
  ok: s.boolean(),
});
