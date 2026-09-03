import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMeMessageErrorEnumSchema, type ChatMeMessageErrorEnum } from "./chat-me-message-error-enum.js";

export type ChatMeMessageerrorschema1 = {
  callstack?: string;
  error: ChatMeMessageErrorEnum;
  ok: "False";
};

export const chatMeMessageerrorschema1Schema: Schema<ChatMeMessageerrorschema1> =
  s.object<ChatMeMessageerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatMeMessageErrorEnumSchema,
    ok: s.literal("False"),
  });
