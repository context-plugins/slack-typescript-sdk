import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.deletePhoto method */
export type UsersDeletePhotoschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersDeletePhotoschemaSchema: Schema<UsersDeletePhotoschema> = s.object<UsersDeletePhotoschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
