import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersDeletePhotoschema = {
  ok: "True";
};

export const usersDeletePhotoschemaSchema: Schema<UsersDeletePhotoschema> = s.object<UsersDeletePhotoschema>({
  ok: s.literal("True"),
});
