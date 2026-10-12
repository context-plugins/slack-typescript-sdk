import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.setPresence method */
export type UsersSetPresenceschema = {
  ok: boolean;
};

export const usersSetPresenceschemaSchema: Schema<UsersSetPresenceschema> = s.object<UsersSetPresenceschema>({
  ok: s.boolean(),
});
