import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from auth.revoke method */
export type AuthRevokeschema = {
  ok: boolean;
  revoked: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authRevokeschemaSchema: Schema<AuthRevokeschema> = s.object<AuthRevokeschema>(
  {
    ok: s.boolean(),
    revoked: s.boolean(),
  },
  { additionalProperties: s.json() },
);
