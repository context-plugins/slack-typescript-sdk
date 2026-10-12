import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from pins.remove method */
export type PinsRemoveschema = {
  ok: boolean;
};

export const pinsRemoveschemaSchema: Schema<PinsRemoveschema> = s.object<PinsRemoveschema>({
  ok: s.boolean(),
});
