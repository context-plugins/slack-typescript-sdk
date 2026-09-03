import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanThread = {
  type?: string[];
  user?: string[];
};

export const canThreadSchema: Schema<CanThread> = s.object<CanThread>({
  type: s.optional(s.array(s.string())),
  user: s.optional(s.array(s.string())),
});
