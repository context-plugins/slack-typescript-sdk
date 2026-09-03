import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WhoCanPost = {
  type?: string[];
  user?: string[];
};

export const whoCanPostSchema: Schema<WhoCanPost> = s.object<WhoCanPost>({
  type: s.optional(s.array(s.string())),
  user: s.optional(s.array(s.string())),
});
