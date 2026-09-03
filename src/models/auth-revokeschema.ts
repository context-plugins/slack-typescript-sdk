import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthRevokeschema = {
  ok: "True";
  revoked: boolean;
};

export const authRevokeschemaSchema: Schema<AuthRevokeschema> = s.object<AuthRevokeschema>({
  ok: s.literal("True"),
  revoked: s.boolean(),
});
