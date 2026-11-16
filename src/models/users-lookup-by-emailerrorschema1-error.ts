import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usersLookupByEmailErrorEnumSchema,
  type UsersLookupByEmailErrorEnum,
} from "./users-lookup-by-email-error-enum.js";

/** Schema for error response from users.lookupByEmail method */
export type UsersLookupByEmailerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersLookupByEmailErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersLookupByEmailerrorschema1ErrorSchema: Schema<UsersLookupByEmailerrorschema1Error> =
  s.object<UsersLookupByEmailerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: usersLookupByEmailErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
