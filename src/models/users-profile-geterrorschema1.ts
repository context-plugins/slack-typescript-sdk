import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersProfileGetErrorEnumSchema,
  type UsersProfileGetErrorEnum,
} from "./users-profile-get-error-enum.js";

export type UsersProfileGeterrorschema1 = {
  callstack?: string;
  error: UsersProfileGetErrorEnum;
  ok: "False";
};

export const usersProfileGeterrorschema1Schema: Schema<UsersProfileGeterrorschema1> =
  s.object<UsersProfileGeterrorschema1>({
    callstack: s.optional(s.string()),
    error: usersProfileGetErrorEnumSchema,
    ok: s.literal("False"),
  });
