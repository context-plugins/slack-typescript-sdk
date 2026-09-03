import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsUsersUpdateschema = {
  ok: "True";
  usergroup: SubteamUsergroupObject;
};

export const usergroupsUsersUpdateschemaSchema: Schema<UsergroupsUsersUpdateschema> =
  s.object<UsergroupsUsersUpdateschema>({
    ok: s.literal("True"),
    usergroup: subteamUsergroupObjectSchema,
  });
