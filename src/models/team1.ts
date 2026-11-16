import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Team1 = {
  domain: string;
  id: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const team1Properties: s.Shape<Team1> = {
  domain: s.string(),
  id: s.string(),
  name: s.string(),
};

export const team1InternalSchema: Schema<Team1> = s.object<Team1>(team1Properties, {
  additionalProperties: s.json(),
});

export const team1Schema: Schema<Team1> = s.lazySchema(() =>
  s.object<Team1>(
    {
      ...team1Properties,
      id: s.string().check(s.pattern("^[T][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
