import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTestErrorEnumSchema, type AuthTestErrorEnum } from "./auth-test-error-enum.js";

/** Schema for error response auth.test method */
export type AuthTesterrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: AuthTestErrorEnum;
  ok: boolean;
};

export const authTesterrorschema1Schema: Schema<AuthTesterrorschema1> = s.object<AuthTesterrorschema1>({
  callstack: s.optional(s.string()),
  error: authTestErrorEnumSchema,
  ok: s.boolean(),
});
