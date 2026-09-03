import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersListErrorEnumSchema, type UsersListErrorEnum } from "./users-list-error-enum.js";

export type UsersListerrorschema1Error = {
  callstack?: string;
  error: UsersListErrorEnum;
  ok: "False";
};

export const usersListerrorschema1ErrorSchema: Schema<UsersListerrorschema1Error> =
  s.object<UsersListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersListErrorEnumSchema,
    ok: s.literal("False"),
  });
