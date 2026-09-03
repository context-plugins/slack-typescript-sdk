import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsCreateschema = {
  ok: "True";
  usergroup: SubteamUsergroupObject;
};

export const usergroupsCreateschemaSchema: Schema<UsergroupsCreateschema> = s.object<UsergroupsCreateschema>({
  ok: s.literal("True"),
  usergroup: subteamUsergroupObjectSchema,
});
