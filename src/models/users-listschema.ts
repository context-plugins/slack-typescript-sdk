import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.list method */
export type UsersListschema = {
  cacheTs: number;
  members: Record<string, unknown>[];
  ok: boolean;
  responseMetadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersListschemaProperties: s.Shape<UsersListschema> = {
  cacheTs: s.int(),
  members: s.array(s.record(s.string(), s.unknown())),
  ok: s.boolean(),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    cacheTs: "cache_ts",
    responseMetadata: "response_metadata",
  },
};

export const usersListschemaInternalSchema: Schema<UsersListschema> = s.object<UsersListschema>(
  usersListschemaProperties,
  { additionalProperties: s.json() },
);

export const usersListschemaSchema: Schema<UsersListschema> = s.lazySchema(() =>
  s.object<UsersListschema>(
    {
      ...usersListschemaProperties,
      members: s.array(s.record(s.string(), s.unknown())).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
