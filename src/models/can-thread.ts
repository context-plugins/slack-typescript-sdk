import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CanThread = {
  type?: string[];
  user?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const canThreadSchema: Schema<CanThread> = s.object<CanThread>(
  {
    type: s.optional(s.array(s.string())),
    user: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
