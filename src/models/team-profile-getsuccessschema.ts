import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";

export type TeamProfileGetsuccessschema = {
  ok: "True";
  profile: Profile;
};

export const teamProfileGetsuccessschemaSchema: Schema<TeamProfileGetsuccessschema> =
  s.object<TeamProfileGetsuccessschema>({
    ok: s.literal("True"),
    profile: profileSchema,
  });
