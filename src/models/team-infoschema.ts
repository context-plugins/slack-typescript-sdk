import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamObjectSchema, type TeamObject } from "./team-object.js";

export type TeamInfoschema = {
  ok: "True";
  team: TeamObject;
};

export const teamInfoschemaSchema: Schema<TeamInfoschema> = s.object<TeamInfoschema>({
  ok: s.literal("True"),
  team: teamObjectSchema,
});
