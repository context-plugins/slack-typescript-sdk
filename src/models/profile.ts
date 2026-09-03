import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objsTeamProfileFieldSchema, type ObjsTeamProfileField } from "./objs-team-profile-field.js";

export type Profile = {
  fields: ObjsTeamProfileField[];
};

export const profileSchema: Schema<Profile> = s.object<Profile>({
  fields: s.array(s.lazy(() => objsTeamProfileFieldSchema)),
});
