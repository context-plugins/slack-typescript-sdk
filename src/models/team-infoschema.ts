import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamObjectSchema, type TeamObject } from "./team-object.js";

/** Schema for successful response from team.info method */
export type TeamInfoschema = {
  ok: boolean;
  team: TeamObject;
};

export const teamInfoschemaSchema: Schema<TeamInfoschema> = s.object<TeamInfoschema>({
  ok: s.boolean(),
  team: teamObjectSchema,
});
