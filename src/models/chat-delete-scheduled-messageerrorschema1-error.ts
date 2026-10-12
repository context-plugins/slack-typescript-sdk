import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatDeleteScheduledMessageErrorEnumSchema,
  type ChatDeleteScheduledMessageErrorEnum,
} from "./chat-delete-scheduled-message-error-enum.js";

/** Schema for error response from chat.deleteScheduledMessage method */
export type ChatDeleteScheduledMessageerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatDeleteScheduledMessageErrorEnum;
  ok: boolean;
};

export const chatDeleteScheduledMessageerrorschema1ErrorSchema: Schema<ChatDeleteScheduledMessageerrorschema1Error> =
  s.object<ChatDeleteScheduledMessageerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatDeleteScheduledMessageErrorEnumSchema,
    ok: s.boolean(),
  });
