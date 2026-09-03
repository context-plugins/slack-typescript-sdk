import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamProfileGetErrorEnumSchema,
  type TeamProfileGetErrorEnum,
} from "./team-profile-get-error-enum.js";

export type TeamProfileGeterrorschema1Error = {
  callstack?: string;
  error: TeamProfileGetErrorEnum;
  ok: "False";
};

export const teamProfileGeterrorschema1ErrorSchema: Schema<TeamProfileGeterrorschema1Error> =
  s.object<TeamProfileGeterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: teamProfileGetErrorEnumSchema,
    ok: s.literal("False"),
  });
