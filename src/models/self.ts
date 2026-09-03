import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Self = {
  id: string;
  name: string;
};

export const selfSchema: Schema<Self> = s.object<Self>({
  id: s.string(),
  name: s.string(),
});
