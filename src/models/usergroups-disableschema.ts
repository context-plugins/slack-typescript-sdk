import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.disable method */
export type UsergroupsDisableschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsDisableschemaProperties: s.Shape<UsergroupsDisableschema> = {
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectInternalSchema,
};

export const usergroupsDisableschemaInternalSchema: Schema<UsergroupsDisableschema> =
  s.object<UsergroupsDisableschema>(usergroupsDisableschemaProperties, { additionalProperties: s.json() });

export const usergroupsDisableschemaSchema: Schema<UsergroupsDisableschema> = s.lazySchema(() =>
  s.object<UsergroupsDisableschema>(
    {
      ...usergroupsDisableschemaProperties,
      usergroup: subteamUsergroupObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
