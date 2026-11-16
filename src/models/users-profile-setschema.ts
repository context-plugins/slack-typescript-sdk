import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userprofileobjectInternalSchema,
  userprofileobjectSchema,
  type Userprofileobject,
} from "./userprofileobject.js";

/** Schema for successful response from users.profile.set method */
export type UsersProfileSetschema = {
  emailPending?: string;
  ok: boolean;
  profile: Userprofileobject;
  username: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersProfileSetschemaProperties: s.Shape<UsersProfileSetschema> = {
  emailPending: s.optional(s.string()),
  ok: s.boolean(),
  profile: userprofileobjectInternalSchema,
  username: s.string(),
  _keysMap: {
    emailPending: "email_pending",
  },
};

export const usersProfileSetschemaInternalSchema: Schema<UsersProfileSetschema> =
  s.object<UsersProfileSetschema>(usersProfileSetschemaProperties, { additionalProperties: s.json() });

export const usersProfileSetschemaSchema: Schema<UsersProfileSetschema> = s.lazySchema(() =>
  s.object<UsersProfileSetschema>(
    {
      ...usersProfileSetschemaProperties,
      profile: userprofileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
