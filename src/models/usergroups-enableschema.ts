import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.enable method */
export type UsergroupsEnableschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
};

export const usergroupsEnableschemaSchema: Schema<UsergroupsEnableschema> = s.object<UsergroupsEnableschema>({
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectSchema,
});
