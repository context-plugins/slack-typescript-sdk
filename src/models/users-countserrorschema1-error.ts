import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for error response users.getPresence method */
export type UsersCountserrorschema1Error = {
  error: string;
  ok: boolean;
};

export const usersCountserrorschema1ErrorSchema: Schema<UsersCountserrorschema1Error> =
  s.object<UsersCountserrorschema1Error>({
    error: s.string(),
    ok: s.boolean(),
  });
