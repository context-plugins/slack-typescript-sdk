import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamAccessLogsErrorEnumSchema,
  type TeamAccessLogsErrorEnum,
} from "./team-access-logs-error-enum.js";

export type TeamAccessLogserrorschema1 = {
  callstack?: string;
  error: TeamAccessLogsErrorEnum;
  ok: "False";
};

export const teamAccessLogserrorschema1Schema: Schema<TeamAccessLogserrorschema1> =
  s.object<TeamAccessLogserrorschema1>({
    callstack: s.optional(s.string()),
    error: teamAccessLogsErrorEnumSchema,
    ok: s.literal("False"),
  });
