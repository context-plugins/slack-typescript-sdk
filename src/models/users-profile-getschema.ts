import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userprofileobjectSchema, type Userprofileobject } from "./userprofileobject.js";

/** Schema for successful response from users.profile.get method */
export type UsersProfileGetschema = {
  ok: boolean;
  profile: Userprofileobject;
};

export const usersProfileGetschemaSchema: Schema<UsersProfileGetschema> = s.object<UsersProfileGetschema>({
  ok: s.boolean(),
  profile: userprofileobjectSchema,
});
