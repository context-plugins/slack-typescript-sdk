import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.create method */
export type UsergroupsCreateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
};

export const usergroupsCreateschemaSchema: Schema<UsergroupsCreateschema> = s.object<UsergroupsCreateschema>({
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectSchema,
});
