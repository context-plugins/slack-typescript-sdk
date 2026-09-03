import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Resource = {
  id?: string;
  type?: string;
};

export const resourceSchema: Schema<Resource> = s.object<Resource>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
});
