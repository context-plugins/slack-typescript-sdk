import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTestErrorEnumSchema, type AuthTestErrorEnum } from "./auth-test-error-enum.js";

/** Schema for error response auth.test method */
export type AuthTesterrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AuthTestErrorEnum;
  ok: boolean;
};

export const authTesterrorschema1ErrorSchema: Schema<AuthTesterrorschema1Error> =
  s.object<AuthTesterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: authTestErrorEnumSchema,
    ok: s.boolean(),
  });
