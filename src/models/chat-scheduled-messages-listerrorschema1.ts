import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduledMessagesListErrorEnumSchema,
  type ChatScheduledMessagesListErrorEnum,
} from "./chat-scheduled-messages-list-error-enum.js";

/** Schema for error response from chat.scheduledMessages.list method */
export type ChatScheduledMessagesListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatScheduledMessagesListErrorEnum;
  ok: boolean;
};

export const chatScheduledMessagesListerrorschema1Schema: Schema<ChatScheduledMessagesListerrorschema1> =
  s.object<ChatScheduledMessagesListerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatScheduledMessagesListErrorEnumSchema,
    ok: s.boolean(),
  });
