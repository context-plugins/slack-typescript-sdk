import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userprofileobjectSchema, type Userprofileobject } from "./userprofileobject.js";

export type UsersProfileSetschema = {
  emailPending?: string;
  ok: "True";
  profile: Userprofileobject;
  username: string;
};

export const usersProfileSetschemaSchema: Schema<UsersProfileSetschema> = s.object<UsersProfileSetschema>({
  emailPending: s.optional(s.string()),
  ok: s.literal("True"),
  profile: userprofileobjectSchema,
  username: s.string(),
  _keysMap: {
    emailPending: "email_pending",
  },
});
