import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usersProfileSetErrorEnumSchema,
  type UsersProfileSetErrorEnum,
} from "./users-profile-set-error-enum.js";

/** Schema for error response from users.profile.set method */
export type UsersProfileSeterrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersProfileSetErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersProfileSeterrorschema1Schema: Schema<UsersProfileSeterrorschema1> =
  s.object<UsersProfileSeterrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: usersProfileSetErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
