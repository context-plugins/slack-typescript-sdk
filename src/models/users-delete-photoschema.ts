import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from users.deletePhoto method */
export type UsersDeletePhotoschema = {
  ok: boolean;
};

export const usersDeletePhotoschemaSchema: Schema<UsersDeletePhotoschema> = s.object<UsersDeletePhotoschema>({
  ok: s.boolean(),
});
