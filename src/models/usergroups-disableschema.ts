import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.disable method */
export type UsergroupsDisableschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
};

export const usergroupsDisableschemaSchema: Schema<UsergroupsDisableschema> =
  s.object<UsergroupsDisableschema>({
    ok: s.boolean(),
    usergroup: subteamUsergroupObjectSchema,
  });
