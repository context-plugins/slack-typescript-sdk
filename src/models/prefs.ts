import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Prefs = {
  channels: string[];
  groups: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const prefsProperties: s.Shape<Prefs> = {
  channels: s.array(s.string()),
  groups: s.array(s.string()),
};

export const prefsInternalSchema: Schema<Prefs> = s.object<Prefs>(prefsProperties, {
  additionalProperties: s.json(),
});

export const prefsSchema: Schema<Prefs> = s.lazySchema(() =>
  s.object<Prefs>(
    {
      ...prefsProperties,
      channels: s.array(s.string().check(s.pattern("^[C][A-Z0-9]{2,}$"))),
      groups: s.array(s.string().check(s.pattern("^[G][A-Z0-9]{8,}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
