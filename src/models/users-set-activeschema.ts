import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.setActive method */
export type UsersSetActiveschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersSetActiveschemaSchema: Schema<UsersSetActiveschema> = s.object<UsersSetActiveschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
