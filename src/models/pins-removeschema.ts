import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PinsRemoveschema = {
  ok: "True";
};

export const pinsRemoveschemaSchema: Schema<PinsRemoveschema> = s.object<PinsRemoveschema>({
  ok: s.literal("True"),
});
