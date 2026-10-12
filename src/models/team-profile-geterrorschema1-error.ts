import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamProfileGetErrorEnumSchema,
  type TeamProfileGetErrorEnum,
} from "./team-profile-get-error-enum.js";

/** Schema for error response from team.profile.get method */
export type TeamProfileGeterrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: TeamProfileGetErrorEnum;
  ok: boolean;
};

export const teamProfileGeterrorschema1ErrorSchema: Schema<TeamProfileGeterrorschema1Error> =
  s.object<TeamProfileGeterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: teamProfileGetErrorEnumSchema,
    ok: s.boolean(),
  });
