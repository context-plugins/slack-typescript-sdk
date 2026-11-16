import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.update method */
export type UsergroupsUpdateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsUpdateschemaProperties: s.Shape<UsergroupsUpdateschema> = {
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectInternalSchema,
};

export const usergroupsUpdateschemaInternalSchema: Schema<UsergroupsUpdateschema> =
  s.object<UsergroupsUpdateschema>(usergroupsUpdateschemaProperties, { additionalProperties: s.json() });

export const usergroupsUpdateschemaSchema: Schema<UsergroupsUpdateschema> = s.lazySchema(() =>
  s.object<UsergroupsUpdateschema>(
    {
      ...usergroupsUpdateschemaProperties,
      usergroup: subteamUsergroupObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
