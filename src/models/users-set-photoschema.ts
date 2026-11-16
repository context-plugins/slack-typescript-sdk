import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profile1InternalSchema, profile1Schema, type Profile1 } from "./profile1.js";

/** Schema for successful response from users.setPhoto method */
export type UsersSetPhotoschema = {
  ok: boolean;
  profile: Profile1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersSetPhotoschemaProperties: s.Shape<UsersSetPhotoschema> = {
  ok: s.boolean(),
  profile: profile1InternalSchema,
};

export const usersSetPhotoschemaInternalSchema: Schema<UsersSetPhotoschema> = s.object<UsersSetPhotoschema>(
  usersSetPhotoschemaProperties,
  { additionalProperties: s.json() },
);

export const usersSetPhotoschemaSchema: Schema<UsersSetPhotoschema> = s.lazySchema(() =>
  s.object<UsersSetPhotoschema>(
    {
      ...usersSetPhotoschemaProperties,
      profile: profile1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
