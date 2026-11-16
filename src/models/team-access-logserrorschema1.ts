import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  teamAccessLogsErrorEnumSchema,
  type TeamAccessLogsErrorEnum,
} from "./team-access-logs-error-enum.js";

/** Schema for error response from team.accessLogs method */
export type TeamAccessLogserrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: TeamAccessLogsErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamAccessLogserrorschema1Schema: Schema<TeamAccessLogserrorschema1> =
  s.object<TeamAccessLogserrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: teamAccessLogsErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
