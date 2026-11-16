import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userprofileobjectInternalSchema,
  userprofileobjectSchema,
  type Userprofileobject,
} from "./userprofileobject.js";

/** Schema for successful response from users.profile.get method */
export type UsersProfileGetschema = {
  ok: boolean;
  profile: Userprofileobject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersProfileGetschemaProperties: s.Shape<UsersProfileGetschema> = {
  ok: s.boolean(),
  profile: userprofileobjectInternalSchema,
};

export const usersProfileGetschemaInternalSchema: Schema<UsersProfileGetschema> =
  s.object<UsersProfileGetschema>(usersProfileGetschemaProperties, { additionalProperties: s.json() });

export const usersProfileGetschemaSchema: Schema<UsersProfileGetschema> = s.lazySchema(() =>
  s.object<UsersProfileGetschema>(
    {
      ...usersProfileGetschemaProperties,
      profile: userprofileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
