import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authRevokeErrorEnumSchema, type AuthRevokeErrorEnum } from "./auth-revoke-error-enum.js";

/** Schema for error response from auth.revoke method */
export type AuthRevokeerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AuthRevokeErrorEnum;
  ok: boolean;
};

export const authRevokeerrorschema1Schema: Schema<AuthRevokeerrorschema1> = s.object<AuthRevokeerrorschema1>({
  callstack: s.optional(s.string()),
  error: authRevokeErrorEnumSchema,
  ok: s.boolean(),
});
