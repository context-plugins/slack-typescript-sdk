import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.info method */
export type UsersInfosuccessschema = {
  ok: boolean;
  user: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersInfosuccessschemaSchema: Schema<UsersInfosuccessschema> = s.object<UsersInfosuccessschema>(
  {
    ok: s.boolean(),
    user: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
