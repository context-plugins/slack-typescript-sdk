import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StarsRemoveschema = {
  ok: "True";
};

export const starsRemoveschemaSchema: Schema<StarsRemoveschema> = s.object<StarsRemoveschema>({
  ok: s.literal("True"),
});
