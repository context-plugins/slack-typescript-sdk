import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersLookupByEmailErrorEnumSchema,
  type UsersLookupByEmailErrorEnum,
} from "./users-lookup-by-email-error-enum.js";

export type UsersLookupByEmailerrorschema1Error = {
  callstack?: string;
  error: UsersLookupByEmailErrorEnum;
  ok: "False";
};

export const usersLookupByEmailerrorschema1ErrorSchema: Schema<UsersLookupByEmailerrorschema1Error> =
  s.object<UsersLookupByEmailerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersLookupByEmailErrorEnumSchema,
    ok: s.literal("False"),
  });
