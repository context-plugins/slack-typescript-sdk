import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Topic = {
  creator: string;
  lastSet: number;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const topicProperties: s.Shape<Topic> = {
  creator: s.string(),
  lastSet: s.int(),
  value: s.string(),
  _keysMap: {
    lastSet: "last_set",
  },
};

export const topicInternalSchema: Schema<Topic> = s.object<Topic>(topicProperties, {
  additionalProperties: s.json(),
});

export const topicSchema: Schema<Topic> = s.lazySchema(() =>
  s.object<Topic>(
    {
      ...topicProperties,
      creator: s.string().check(s.pattern("^[UW][A-Z0-9]{8,}$|^$")),
    },
    { additionalProperties: s.json() },
  ),
);
