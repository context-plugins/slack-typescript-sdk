import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatDeleteScheduledMessageErrorEnumSchema,
  type ChatDeleteScheduledMessageErrorEnum,
} from "./chat-delete-scheduled-message-error-enum.js";

export type ChatDeleteScheduledMessageerrorschema1Error = {
  callstack?: string;
  error: ChatDeleteScheduledMessageErrorEnum;
  ok: "False";
};

export const chatDeleteScheduledMessageerrorschema1ErrorSchema: Schema<ChatDeleteScheduledMessageerrorschema1Error> =
  s.object<ChatDeleteScheduledMessageerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatDeleteScheduledMessageErrorEnumSchema,
    ok: s.literal("False"),
  });
