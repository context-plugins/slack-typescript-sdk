import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersLookupByEmailErrorEnumSchema,
  type UsersLookupByEmailErrorEnum,
} from "./users-lookup-by-email-error-enum.js";

/** Schema for error response from users.lookupByEmail method */
export type UsersLookupByEmailerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersLookupByEmailErrorEnum;
  ok: boolean;
};

export const usersLookupByEmailerrorschema1Schema: Schema<UsersLookupByEmailerrorschema1> =
  s.object<UsersLookupByEmailerrorschema1>({
    callstack: s.optional(s.string()),
    error: usersLookupByEmailErrorEnumSchema,
    ok: s.boolean(),
  });
