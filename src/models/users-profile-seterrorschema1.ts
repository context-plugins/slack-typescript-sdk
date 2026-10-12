import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
};

export const usersProfileSeterrorschema1Schema: Schema<UsersProfileSeterrorschema1> =
  s.object<UsersProfileSeterrorschema1>({
    callstack: s.optional(s.string()),
    error: usersProfileSetErrorEnumSchema,
    ok: s.boolean(),
  });
