import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

/** Schema for error response from team.info method */
export type TeamInfoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInfoerrorschema1ErrorSchema: Schema<TeamInfoerrorschema1Error> =
  s.object<TeamInfoerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: rtmConnectErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
