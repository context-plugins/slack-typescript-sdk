import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authRevokeErrorEnumSchema, type AuthRevokeErrorEnum } from "./auth-revoke-error-enum.js";

export type AuthRevokeerrorschema1Error = {
  callstack?: string;
  error: AuthRevokeErrorEnum;
  ok: "False";
};

export const authRevokeerrorschema1ErrorSchema: Schema<AuthRevokeerrorschema1Error> =
  s.object<AuthRevokeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: authRevokeErrorEnumSchema,
    ok: s.literal("False"),
  });
