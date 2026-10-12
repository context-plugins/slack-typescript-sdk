import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from auth.revoke method */
export type AuthRevokeschema = {
  ok: boolean;
  revoked: boolean;
};

export const authRevokeschemaSchema: Schema<AuthRevokeschema> = s.object<AuthRevokeschema>({
  ok: s.boolean(),
  revoked: s.boolean(),
});
