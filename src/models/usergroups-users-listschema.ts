import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from usergroups.users.list method */
export type UsergroupsUsersListschema = {
  ok: boolean;
  users: string[];
};

export const usergroupsUsersListschemaSchema: Schema<UsergroupsUsersListschema> =
  s.object<UsergroupsUsersListschema>({
    ok: s.boolean(),
    users: s.array(s.string()),
  });
