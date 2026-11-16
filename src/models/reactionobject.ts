import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reactionobject = {
  count: number;
  name: string;
  users: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reactionobjectProperties: s.Shape<Reactionobject> = {
  count: s.int(),
  name: s.string(),
  users: s.array(s.string()),
};

export const reactionobjectInternalSchema: Schema<Reactionobject> = s.object<Reactionobject>(
  reactionobjectProperties,
  { additionalProperties: s.json() },
);

export const reactionobjectSchema: Schema<Reactionobject> = s.lazySchema(() =>
  s.object<Reactionobject>(
    {
      ...reactionobjectProperties,
      users: s.array(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
