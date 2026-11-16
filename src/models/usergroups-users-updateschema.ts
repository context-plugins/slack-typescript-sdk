import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.users.update method */
export type UsergroupsUsersUpdateschema = {
  ok: boolean;
  usergroup: SubteamUsergroupObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsUsersUpdateschemaProperties: s.Shape<UsergroupsUsersUpdateschema> = {
  ok: s.boolean(),
  usergroup: subteamUsergroupObjectInternalSchema,
};

export const usergroupsUsersUpdateschemaInternalSchema: Schema<UsergroupsUsersUpdateschema> =
  s.object<UsergroupsUsersUpdateschema>(usergroupsUsersUpdateschemaProperties, {
    additionalProperties: s.json(),
  });

export const usergroupsUsersUpdateschemaSchema: Schema<UsergroupsUsersUpdateschema> = s.lazySchema(() =>
  s.object<UsergroupsUsersUpdateschema>(
    {
      ...usergroupsUsersUpdateschemaProperties,
      usergroup: subteamUsergroupObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
