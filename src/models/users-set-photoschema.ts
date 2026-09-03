import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profile1Schema, type Profile1 } from "./profile1.js";

export type UsersSetPhotoschema = {
  ok: "True";
  profile: Profile1;
};

export const usersSetPhotoschemaSchema: Schema<UsersSetPhotoschema> = s.object<UsersSetPhotoschema>({
  ok: s.literal("True"),
  profile: profile1Schema,
});
