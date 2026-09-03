import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersProfileSetErrorEnumSchema,
  type UsersProfileSetErrorEnum,
} from "./users-profile-set-error-enum.js";

export type UsersProfileSeterrorschema1 = {
  callstack?: string;
  error: UsersProfileSetErrorEnum;
  ok: "False";
};

export const usersProfileSeterrorschema1Schema: Schema<UsersProfileSeterrorschema1> =
  s.object<UsersProfileSeterrorschema1>({
    callstack: s.optional(s.string()),
    error: usersProfileSetErrorEnumSchema,
    ok: s.literal("False"),
  });
