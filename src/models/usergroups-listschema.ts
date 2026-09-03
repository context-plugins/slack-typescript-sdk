import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsListschema = {
  ok: "True";
  usergroups: SubteamUsergroupObject[];
};

export const usergroupsListschemaSchema: Schema<UsergroupsListschema> = s.object<UsergroupsListschema>({
  ok: s.literal("True"),
  usergroups: s.array(s.lazy(() => subteamUsergroupObjectSchema)),
});
