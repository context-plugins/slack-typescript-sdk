import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Responsemetadata3 = {
  warnings?: string[];
};

export const responsemetadata3Schema: Schema<Responsemetadata3> = s.object<Responsemetadata3>({
  warnings: s.optional(s.array(s.string())),
});
