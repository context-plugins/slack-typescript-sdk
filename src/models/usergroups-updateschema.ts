import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsUpdateschema = {
  ok: "True";
  usergroup: SubteamUsergroupObject;
};

export const usergroupsUpdateschemaSchema: Schema<UsergroupsUpdateschema> = s.object<UsergroupsUpdateschema>({
  ok: s.literal("True"),
  usergroup: subteamUsergroupObjectSchema,
});
