import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.lookupByEmail method */
export type UsersLookupByEmailsuccessschema = {
  ok: boolean;
  user: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersLookupByEmailsuccessschemaSchema: Schema<UsersLookupByEmailsuccessschema> =
  s.object<UsersLookupByEmailsuccessschema>(
    {
      ok: s.boolean(),
      user: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
