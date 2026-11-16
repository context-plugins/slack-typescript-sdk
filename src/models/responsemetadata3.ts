import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Responsemetadata3 = {
  warnings?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const responsemetadata3Properties: s.Shape<Responsemetadata3> = {
  warnings: s.optional(s.array(s.string())),
};

export const responsemetadata3InternalSchema: Schema<Responsemetadata3> = s.object<Responsemetadata3>(
  responsemetadata3Properties,
  { additionalProperties: s.json() },
);

export const responsemetadata3Schema: Schema<Responsemetadata3> = s.lazySchema(() =>
  s.object<Responsemetadata3>(
    {
      ...responsemetadata3Properties,
      warnings: s.optional(s.array(s.string()).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
