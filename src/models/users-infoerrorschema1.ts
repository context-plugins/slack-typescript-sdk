import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersInfoErrorEnumSchema, type UsersInfoErrorEnum } from "./users-info-error-enum.js";

/** Schema for error response from users.info method */
export type UsersInfoerrorschema1 = {
  callstack?: string;
  error: UsersInfoErrorEnum;
  ok: boolean;
};

export const usersInfoerrorschema1Schema: Schema<UsersInfoerrorschema1> = s.object<UsersInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: usersInfoErrorEnumSchema,
  ok: s.boolean(),
});
