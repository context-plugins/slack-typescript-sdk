import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduleMessageErrorEnumSchema,
  type ChatScheduleMessageErrorEnum,
} from "./chat-schedule-message-error-enum.js";

/** Schema for error response chat.scheduleMessage method */
export type ChatScheduleMessageerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatScheduleMessageErrorEnum;
  ok: boolean;
};

export const chatScheduleMessageerrorschema1Schema: Schema<ChatScheduleMessageerrorschema1> =
  s.object<ChatScheduleMessageerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatScheduleMessageErrorEnumSchema,
    ok: s.boolean(),
  });
