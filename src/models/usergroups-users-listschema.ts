import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from usergroups.users.list method */
export type UsergroupsUsersListschema = {
  ok: boolean;
  users: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usergroupsUsersListschemaProperties: s.Shape<UsergroupsUsersListschema> = {
  ok: s.boolean(),
  users: s.array(s.string()),
};

export const usergroupsUsersListschemaInternalSchema: Schema<UsergroupsUsersListschema> =
  s.object<UsergroupsUsersListschema>(usergroupsUsersListschemaProperties, {
    additionalProperties: s.json(),
  });

export const usergroupsUsersListschemaSchema: Schema<UsergroupsUsersListschema> = s.lazySchema(() =>
  s.object<UsergroupsUsersListschema>(
    {
      ...usergroupsUsersListschemaProperties,
      users: s.array(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
