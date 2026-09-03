import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

export type RtmConnecterrorschema1Error = {
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: "False";
};

export const rtmConnecterrorschema1ErrorSchema: Schema<RtmConnecterrorschema1Error> =
  s.object<RtmConnecterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: rtmConnectErrorEnumSchema,
    ok: s.literal("False"),
  });
