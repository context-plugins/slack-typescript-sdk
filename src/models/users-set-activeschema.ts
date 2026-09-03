import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersSetActiveschema = {
  ok: "True";
};

export const usersSetActiveschemaSchema: Schema<UsersSetActiveschema> = s.object<UsersSetActiveschema>({
  ok: s.literal("True"),
});
