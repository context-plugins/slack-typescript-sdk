import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersListschema = {
  cacheTs: number;
  members: Record<string, unknown>[];
  ok: "True";
  responseMetadata?: Record<string, unknown>;
};

export const usersListschemaSchema: Schema<UsersListschema> = s.object<UsersListschema>({
  cacheTs: s.number(),
  members: s.array(s.record(s.string(), s.unknown())),
  ok: s.literal("True"),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    cacheTs: "cache_ts",
    responseMetadata: "response_metadata",
  },
});
