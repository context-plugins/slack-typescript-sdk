import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.create method */
export type UsergroupsCreateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsCreateschemaProperties: s.Shape<UsergroupsCreateschema> = {
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectInternalSchema,
};

export const usergroupsCreateschemaInternalSchema: Schema<UsergroupsCreateschema> =
  s.object<UsergroupsCreateschema>(usergroupsCreateschemaProperties, { additionalProperties: s.json() });

export const usergroupsCreateschemaSchema: Schema<UsergroupsCreateschema> = s.lazySchema(() =>
  s.object<UsergroupsCreateschema>(
    {
      ...usergroupsCreateschemaProperties,
      usergroup: subteamUsergroupObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
