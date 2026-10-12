import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersSetPresenceErrorEnumSchema,
  type UsersSetPresenceErrorEnum,
} from "./users-set-presence-error-enum.js";

/** Schema for error response from users.setPresence method */
export type UsersSetPresenceerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersSetPresenceErrorEnum;
  ok: boolean;
};

export const usersSetPresenceerrorschema1Schema: Schema<UsersSetPresenceerrorschema1> =
  s.object<UsersSetPresenceerrorschema1>({
    callstack: s.optional(s.string()),
    error: usersSetPresenceErrorEnumSchema,
    ok: s.boolean(),
  });
