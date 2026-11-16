import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usersListErrorEnumSchema, type UsersListErrorEnum } from "./users-list-error-enum.js";

/** Schema for error response from users.list method */
export type UsersListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersListErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersListerrorschema1Schema: Schema<UsersListerrorschema1> = s.object<UsersListerrorschema1>(
  {
    callstack: s.optional(s.string()),
    error: usersListErrorEnumSchema,
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
