import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rtmConnectErrorEnumSchema, type RtmConnectErrorEnum } from "./rtm-connect-error-enum.js";

/** Schema for error response from rtm.connect method */
export type RtmConnecterrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: RtmConnectErrorEnum;
  ok: boolean;
};

export const rtmConnecterrorschema1Schema: Schema<RtmConnecterrorschema1> = s.object<RtmConnecterrorschema1>({
  callstack: s.optional(s.string()),
  error: rtmConnectErrorEnumSchema,
  ok: s.boolean(),
});
