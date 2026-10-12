import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.setActive method */
export type UsersSetActiveschema = {
  ok: boolean;
};

export const usersSetActiveschemaSchema: Schema<UsersSetActiveschema> = s.object<UsersSetActiveschema>({
  ok: s.boolean(),
});
