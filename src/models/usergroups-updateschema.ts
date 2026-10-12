import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.update method */
export type UsergroupsUpdateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
};

export const usergroupsUpdateschemaSchema: Schema<UsergroupsUpdateschema> = s.object<UsergroupsUpdateschema>({
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectSchema,
});
