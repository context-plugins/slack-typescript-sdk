import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

/** Schema for error response from team.info method */
export type TeamInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: boolean;
};

export const teamInfoerrorschema1Schema: Schema<TeamInfoerrorschema1> = s.object<TeamInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: rtmConnectErrorEnumSchema,
  ok: s.boolean(),
});
