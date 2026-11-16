import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Messageobject1 = {
  attachments?: Record<string, unknown>[];
  blocks?: Record<string, unknown>;
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageobject1Schema: Schema<Messageobject1> = s.object<Messageobject1>(
  {
    attachments: s.optional(s.array(s.record(s.string(), s.unknown()))),
    blocks: s.optional(s.record(s.string(), s.unknown())),
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
