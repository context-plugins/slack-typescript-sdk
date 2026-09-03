import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersInfosuccessschema = {
  ok: "True";
  user: Record<string, unknown>;
};

export const usersInfosuccessschemaSchema: Schema<UsersInfosuccessschema> = s.object<UsersInfosuccessschema>({
  ok: s.literal("True"),
  user: s.record(s.string(), s.unknown()),
});
