import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersCountserrorschema1 = {
  error: string;
  ok: "False";
};

export const usersCountserrorschema1Schema: Schema<UsersCountserrorschema1> =
  s.object<UsersCountserrorschema1>({
    error: s.string(),
    ok: s.literal("False"),
  });
