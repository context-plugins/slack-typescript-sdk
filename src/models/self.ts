import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Self = {
  id: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const selfProperties: s.Shape<Self> = {
  id: s.string(),
  name: s.string(),
};

export const selfInternalSchema: Schema<Self> = s.object<Self>(selfProperties, {
  additionalProperties: s.json(),
});

export const selfSchema: Schema<Self> = s.lazySchema(() =>
  s.object<Self>(
    {
      ...selfProperties,
      id: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
