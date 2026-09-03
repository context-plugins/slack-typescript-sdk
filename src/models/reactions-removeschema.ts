import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReactionsRemoveschema = {
  ok: "True";
};

export const reactionsRemoveschemaSchema: Schema<ReactionsRemoveschema> = s.object<ReactionsRemoveschema>({
  ok: s.literal("True"),
});
