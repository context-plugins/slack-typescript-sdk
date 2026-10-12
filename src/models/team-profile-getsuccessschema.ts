import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";

/** Schema for successful response from team.profile.get method */
export type TeamProfileGetsuccessschema = {
  ok: boolean;
  profile: Profile;
};

export const teamProfileGetsuccessschemaSchema: Schema<TeamProfileGetsuccessschema> =
  s.object<TeamProfileGetsuccessschema>({
    ok: s.boolean(),
    profile: profileSchema,
  });
