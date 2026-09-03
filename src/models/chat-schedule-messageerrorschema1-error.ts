import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduleMessageErrorEnumSchema,
  type ChatScheduleMessageErrorEnum,
} from "./chat-schedule-message-error-enum.js";

export type ChatScheduleMessageerrorschema1Error = {
  callstack?: string;
  error: ChatScheduleMessageErrorEnum;
  ok: "False";
};

export const chatScheduleMessageerrorschema1ErrorSchema: Schema<ChatScheduleMessageerrorschema1Error> =
  s.object<ChatScheduleMessageerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatScheduleMessageErrorEnumSchema,
    ok: s.literal("False"),
  });
