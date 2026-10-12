import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profile1Schema, type Profile1 } from "./profile1.js";

/** Schema for successful response from users.setPhoto method */
export type UsersSetPhotoschema = {
  ok: boolean;
  profile: Profile1;
};

export const usersSetPhotoschemaSchema: Schema<UsersSetPhotoschema> = s.object<UsersSetPhotoschema>({
  ok: s.boolean(),
  profile: profile1Schema,
});
