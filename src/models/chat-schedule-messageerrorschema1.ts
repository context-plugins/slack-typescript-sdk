import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduleMessageErrorEnumSchema,
  type ChatScheduleMessageErrorEnum,
} from "./chat-schedule-message-error-enum.js";

export type ChatScheduleMessageerrorschema1 = {
  callstack?: string;
  error: ChatScheduleMessageErrorEnum;
  ok: "False";
};

export const chatScheduleMessageerrorschema1Schema: Schema<ChatScheduleMessageerrorschema1> =
  s.object<ChatScheduleMessageerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatScheduleMessageErrorEnumSchema,
    ok: s.literal("False"),
  });
