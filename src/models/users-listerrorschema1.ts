import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersListErrorEnumSchema, type UsersListErrorEnum } from "./users-list-error-enum.js";

export type UsersListerrorschema1 = {
  callstack?: string;
  error: UsersListErrorEnum;
  ok: "False";
};

export const usersListerrorschema1Schema: Schema<UsersListerrorschema1> = s.object<UsersListerrorschema1>({
  callstack: s.optional(s.string()),
  error: usersListErrorEnumSchema,
  ok: s.literal("False"),
});
