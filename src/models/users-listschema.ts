import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.list method */
export type UsersListschema = {
  cacheTs: number;
  members: Record<string, unknown>[];
  ok: boolean;
  responseMetadata?: Record<string, unknown>;
};

export const usersListschemaSchema: Schema<UsersListschema> = s.object<UsersListschema>({
  cacheTs: s.int(),
  members: s.array(s.record(s.string(), s.unknown())),
  ok: s.boolean(),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    cacheTs: "cache_ts",
    responseMetadata: "response_metadata",
  },
});
