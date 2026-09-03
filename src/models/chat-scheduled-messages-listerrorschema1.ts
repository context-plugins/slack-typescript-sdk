import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduledMessagesListErrorEnumSchema,
  type ChatScheduledMessagesListErrorEnum,
} from "./chat-scheduled-messages-list-error-enum.js";

export type ChatScheduledMessagesListerrorschema1 = {
  callstack?: string;
  error: ChatScheduledMessagesListErrorEnum;
  ok: "False";
};

export const chatScheduledMessagesListerrorschema1Schema: Schema<ChatScheduledMessagesListerrorschema1> =
  s.object<ChatScheduledMessagesListerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatScheduledMessagesListErrorEnumSchema,
    ok: s.literal("False"),
  });
