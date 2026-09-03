import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamProfileGetErrorEnumSchema,
  type TeamProfileGetErrorEnum,
} from "./team-profile-get-error-enum.js";

export type TeamProfileGeterrorschema1 = {
  callstack?: string;
  error: TeamProfileGetErrorEnum;
  ok: "False";
};

export const teamProfileGeterrorschema1Schema: Schema<TeamProfileGeterrorschema1> =
  s.object<TeamProfileGeterrorschema1>({
    callstack: s.optional(s.string()),
    error: teamProfileGetErrorEnumSchema,
    ok: s.literal("False"),
  });
