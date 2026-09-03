import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authRevokeErrorEnumSchema, type AuthRevokeErrorEnum } from "./auth-revoke-error-enum.js";

export type AuthRevokeerrorschema1 = {
  callstack?: string;
  error: AuthRevokeErrorEnum;
  ok: "False";
};

export const authRevokeerrorschema1Schema: Schema<AuthRevokeerrorschema1> = s.object<AuthRevokeerrorschema1>({
  callstack: s.optional(s.string()),
  error: authRevokeErrorEnumSchema,
  ok: s.literal("False"),
});
