import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  subteamUsergroupObjectInternalSchema,
  subteamUsergroupObjectSchema,
  type SubteamUsergroupObject,
} from "./subteam-usergroup-object.js";

/** Schema for successful response from usergroups.list method */
export type UsergroupsListschema = {
  ok: boolean;
  usergroups: SubteamUsergroupObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsListschemaProperties: s.Shape<UsergroupsListschema> = {
  ok: s.boolean(),
  usergroups: s.array(s.lazy(() => subteamUsergroupObjectInternalSchema)),
};

export const usergroupsListschemaInternalSchema: Schema<UsergroupsListschema> =
  s.object<UsergroupsListschema>(usergroupsListschemaProperties, { additionalProperties: s.json() });

export const usergroupsListschemaSchema: Schema<UsergroupsListschema> = s.lazySchema(() =>
  s.object<UsergroupsListschema>(
    {
      ...usergroupsListschemaProperties,
      usergroups: s.array(s.lazy(() => subteamUsergroupObjectSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
