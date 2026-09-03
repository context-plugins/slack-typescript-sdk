import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsEnableschema = {
  ok: "True";
  usergroup: SubteamUsergroupObject;
};

export const usergroupsEnableschemaSchema: Schema<UsergroupsEnableschema> = s.object<UsergroupsEnableschema>({
  ok: s.literal("True"),
  usergroup: subteamUsergroupObjectSchema,
});
