import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userprofileobjectSchema, type Userprofileobject } from "./userprofileobject.js";

/** Schema for successful response from users.profile.set method */
export type UsersProfileSetschema = {
  emailPending?: string;
  ok: boolean;
  profile: Userprofileobject;
  username: string;
};

export const usersProfileSetschemaSchema: Schema<UsersProfileSetschema> = s.object<UsersProfileSetschema>({
  emailPending: s.optional(s.string()),
  ok: s.boolean(),
  profile: userprofileobjectSchema,
  username: s.string(),
  _keysMap: {
    emailPending: "email_pending",
  },
});
