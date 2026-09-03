import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersSetActiveErrorEnumSchema,
  type UsersSetActiveErrorEnum,
} from "./users-set-active-error-enum.js";

export type UsersSetActiveerrorschema1 = {
  callstack?: string;
  error: UsersSetActiveErrorEnum;
  ok: "False";
};

export const usersSetActiveerrorschema1Schema: Schema<UsersSetActiveerrorschema1> =
  s.object<UsersSetActiveerrorschema1>({
    callstack: s.optional(s.string()),
    error: usersSetActiveErrorEnumSchema,
    ok: s.literal("False"),
  });
