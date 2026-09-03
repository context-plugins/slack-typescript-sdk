import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subteamUsergroupObjectSchema, type SubteamUsergroupObject } from "./subteam-usergroup-object.js";

export type UsergroupsDisableschema = {
  ok: "True";
  usergroup: SubteamUsergroupObject;
};

export const usergroupsDisableschemaSchema: Schema<UsergroupsDisableschema> =
  s.object<UsergroupsDisableschema>({
    ok: s.literal("True"),
    usergroup: subteamUsergroupObjectSchema,
  });
