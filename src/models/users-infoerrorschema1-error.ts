import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersInfoErrorEnumSchema, type UsersInfoErrorEnum } from "./users-info-error-enum.js";

export type UsersInfoerrorschema1Error = {
  callstack?: string;
  error: UsersInfoErrorEnum;
  ok: "False";
};

export const usersInfoerrorschema1ErrorSchema: Schema<UsersInfoerrorschema1Error> =
  s.object<UsersInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
