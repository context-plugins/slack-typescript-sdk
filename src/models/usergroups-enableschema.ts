import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.enable method */
export type UsergroupsEnableschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsEnableschemaProperties: s.Shape<UsergroupsEnableschema> = {
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectInternalSchema,
};

export const usergroupsEnableschemaInternalSchema: Schema<UsergroupsEnableschema> =
  s.object<UsergroupsEnableschema>(usergroupsEnableschemaProperties, { additionalProperties: s.json() });

export const usergroupsEnableschemaSchema: Schema<UsergroupsEnableschema> = s.lazySchema(() =>
  s.object<UsergroupsEnableschema>(
    {
      ...usergroupsEnableschemaProperties,
      usergroup: subteamUsergroupObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
