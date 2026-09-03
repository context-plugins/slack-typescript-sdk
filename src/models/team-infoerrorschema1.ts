import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

export type TeamInfoerrorschema1 = {
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: "False";
};

export const teamInfoerrorschema1Schema: Schema<TeamInfoerrorschema1> = s.object<TeamInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: rtmConnectErrorEnumSchema,
  ok: s.literal("False"),
});
