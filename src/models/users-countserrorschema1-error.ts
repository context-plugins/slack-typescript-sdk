import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersCountserrorschema1Error = {
  error: string;
  ok: "False";
};

export const usersCountserrorschema1ErrorSchema: Schema<UsersCountserrorschema1Error> =
  s.object<UsersCountserrorschema1Error>({
    error: s.string(),
    ok: s.literal("False"),
  });
