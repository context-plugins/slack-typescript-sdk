import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.info method */
export type UsersInfosuccessschema = {
  ok: boolean;
  user: Record<string, unknown>;
};

export const usersInfosuccessschemaSchema: Schema<UsersInfosuccessschema> = s.object<UsersInfosuccessschema>({
  ok: s.boolean(),
  user: s.record(s.string(), s.unknown()),
});
