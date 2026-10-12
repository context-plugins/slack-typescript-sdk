import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.users.update method */
export type UsergroupsUsersUpdateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
};

export const usergroupsUsersUpdateschemaSchema: Schema<UsergroupsUsersUpdateschema> =
  s.object<UsergroupsUsersUpdateschema>({
    ok: s.boolean(),
    usergroup: subteamUsergroupObjectSchema,
  });
