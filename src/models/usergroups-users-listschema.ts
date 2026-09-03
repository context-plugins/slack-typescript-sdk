import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsergroupsUsersListschema = {
  ok: "True";
  users: string[];
};

export const usergroupsUsersListschemaSchema: Schema<UsergroupsUsersListschema> =
  s.object<UsergroupsUsersListschema>({
    ok: s.literal("True"),
    users: s.array(s.string()),
  });
