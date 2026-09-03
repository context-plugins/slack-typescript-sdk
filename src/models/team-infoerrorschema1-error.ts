import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

export type TeamInfoerrorschema1Error = {
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: "False";
};

export const teamInfoerrorschema1ErrorSchema: Schema<TeamInfoerrorschema1Error> =
  s.object<TeamInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: rtmConnectErrorEnumSchema,
    ok: s.literal("False"),
  });
