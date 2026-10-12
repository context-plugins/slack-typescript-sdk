import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authRevokeErrorEnumSchema, type AuthRevokeErrorEnum } from "./auth-revoke-error-enum.js";

/** Schema for error response from auth.revoke method */
export type AuthRevokeerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AuthRevokeErrorEnum;
  ok: boolean;
};

export const authRevokeerrorschema1ErrorSchema: Schema<AuthRevokeerrorschema1Error> =
  s.object<AuthRevokeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: authRevokeErrorEnumSchema,
    ok: s.boolean(),
  });
