import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersSetPresenceschema = {
  ok: "True";
};

export const usersSetPresenceschemaSchema: Schema<UsersSetPresenceschema> = s.object<UsersSetPresenceschema>({
  ok: s.literal("True"),
});
