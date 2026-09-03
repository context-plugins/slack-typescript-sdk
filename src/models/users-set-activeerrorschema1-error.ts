import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersSetActiveErrorEnumSchema,
  type UsersSetActiveErrorEnum,
} from "./users-set-active-error-enum.js";

export type UsersSetActiveerrorschema1Error = {
  callstack?: string;
  error: UsersSetActiveErrorEnum;
  ok: "False";
};

export const usersSetActiveerrorschema1ErrorSchema: Schema<UsersSetActiveerrorschema1Error> =
  s.object<UsersSetActiveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersSetActiveErrorEnumSchema,
    ok: s.literal("False"),
  });
