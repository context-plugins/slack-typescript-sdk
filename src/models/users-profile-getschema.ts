import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userprofileobjectSchema, type Userprofileobject } from "./userprofileobject.js";

export type UsersProfileGetschema = {
  ok: "True";
  profile: Userprofileobject;
};

export const usersProfileGetschemaSchema: Schema<UsersProfileGetschema> = s.object<UsersProfileGetschema>({
  ok: s.literal("True"),
  profile: userprofileobjectSchema,
});
