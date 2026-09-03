import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Messageobject1 = {
  attachments?: Record<string, unknown>[];
  blocks?: Record<string, unknown>;
  text: string;
};

export const messageobject1Schema: Schema<Messageobject1> = s.object<Messageobject1>({
  attachments: s.optional(s.array(s.record(s.string(), s.unknown()))),
  blocks: s.optional(s.record(s.string(), s.unknown())),
  text: s.string(),
});
