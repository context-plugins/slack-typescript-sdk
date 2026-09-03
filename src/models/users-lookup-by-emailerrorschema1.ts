import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersLookupByEmailErrorEnumSchema,
  type UsersLookupByEmailErrorEnum,
} from "./users-lookup-by-email-error-enum.js";

export type UsersLookupByEmailerrorschema1 = {
  callstack?: string;
  error: UsersLookupByEmailErrorEnum;
  ok: "False";
};

export const usersLookupByEmailerrorschema1Schema: Schema<UsersLookupByEmailerrorschema1> =
  s.object<UsersLookupByEmailerrorschema1>({
    callstack: s.optional(s.string()),
    error: usersLookupByEmailErrorEnumSchema,
    ok: s.literal("False"),
  });
