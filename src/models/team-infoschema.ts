import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamObjectInternalSchema, teamObjectSchema, type TeamObject } from "./team-object.js";

/** Schema for successful response from team.info method */
export type TeamInfoschema = {
  ok: boolean;
  team: TeamObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamInfoschemaProperties: s.Shape<TeamInfoschema> = {
  ok: s.boolean(),
  team: teamObjectInternalSchema,
};

export const teamInfoschemaInternalSchema: Schema<TeamInfoschema> = s.object<TeamInfoschema>(
  teamInfoschemaProperties,
  { additionalProperties: s.json() },
);

export const teamInfoschemaSchema: Schema<TeamInfoschema> = s.lazySchema(() =>
  s.object<TeamInfoschema>(
    {
      ...teamInfoschemaProperties,
      team: teamObjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
