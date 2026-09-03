import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTestErrorEnumSchema, type AuthTestErrorEnum } from "./auth-test-error-enum.js";

export type AuthTesterrorschema1Error = {
  callstack?: string;
  error: AuthTestErrorEnum;
  ok: "False";
};

export const authTesterrorschema1ErrorSchema: Schema<AuthTesterrorschema1Error> =
  s.object<AuthTesterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: authTestErrorEnumSchema,
    ok: s.literal("False"),
  });
