import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Purpose = {
  creator: string;
  lastSet: number;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purposeProperties: s.Shape<Purpose> = {
  creator: s.string(),
  lastSet: s.int(),
  value: s.string(),
  _keysMap: {
    lastSet: "last_set",
  },
};

export const purposeInternalSchema: Schema<Purpose> = s.object<Purpose>(purposeProperties, {
  additionalProperties: s.json(),
});

export const purposeSchema: Schema<Purpose> = s.lazySchema(() =>
  s.object<Purpose>(
    {
      ...purposeProperties,
      creator: s.string().check(s.pattern("^[UW][A-Z0-9]{8,}$|^$")),
    },
    { additionalProperties: s.json() },
  ),
);
