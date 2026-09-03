import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTestErrorEnumSchema, type AuthTestErrorEnum } from "./auth-test-error-enum.js";

export type AuthTesterrorschema1 = {
  callstack?: string;
  error: AuthTestErrorEnum;
  ok: "False";
};

export const authTesterrorschema1Schema: Schema<AuthTesterrorschema1> = s.object<AuthTesterrorschema1>({
  callstack: s.optional(s.string()),
  error: authTestErrorEnumSchema,
  ok: s.literal("False"),
});
