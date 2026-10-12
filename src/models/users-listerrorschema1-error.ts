import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersListErrorEnumSchema, type UsersListErrorEnum } from "./users-list-error-enum.js";

/** Schema for error response from users.list method */
export type UsersListerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersListErrorEnum;
  ok: boolean;
};

export const usersListerrorschema1ErrorSchema: Schema<UsersListerrorschema1Error> =
  s.object<UsersListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersListErrorEnumSchema,
    ok: s.boolean(),
  });
