import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersProfileSetErrorEnumSchema,
  type UsersProfileSetErrorEnum,
} from "./users-profile-set-error-enum.js";

export type UsersProfileSeterrorschema1Error = {
  callstack?: string;
  error: UsersProfileSetErrorEnum;
  ok: "False";
};

export const usersProfileSeterrorschema1ErrorSchema: Schema<UsersProfileSeterrorschema1Error> =
  s.object<UsersProfileSeterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersProfileSetErrorEnumSchema,
    ok: s.literal("False"),
  });
