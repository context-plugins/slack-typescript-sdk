import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.list method */
export type UsergroupsListschema = {
  ok: boolean;
  usergroups: SubteamUsergroupObject[];
};

export const usergroupsListschemaSchema: Schema<UsergroupsListschema> = s.object<UsergroupsListschema>({
  ok: s.boolean(),
  usergroups: s.array(s.lazy(() => subteamUsergroupObjectSchema)),
});
