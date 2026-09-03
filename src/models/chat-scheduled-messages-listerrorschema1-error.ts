import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatScheduledMessagesListErrorEnumSchema,
  type ChatScheduledMessagesListErrorEnum,
} from "./chat-scheduled-messages-list-error-enum.js";

export type ChatScheduledMessagesListerrorschema1Error = {
  callstack?: string;
  error: ChatScheduledMessagesListErrorEnum;
  ok: "False";
};

export const chatScheduledMessagesListerrorschema1ErrorSchema: Schema<ChatScheduledMessagesListerrorschema1Error> =
  s.object<ChatScheduledMessagesListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatScheduledMessagesListErrorEnumSchema,
    ok: s.literal("False"),
  });
