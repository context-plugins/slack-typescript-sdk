import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Reactionobject = {
  count: number;
  name: string;
  users: string[];
};

export const reactionobjectSchema: Schema<Reactionobject> = s.object<Reactionobject>({
  count: s.int(),
  name: s.string(),
  users: s.array(s.string()),
});
