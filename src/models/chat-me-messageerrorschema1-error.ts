import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMeMessageErrorEnumSchema, type ChatMeMessageErrorEnum } from "./chat-me-message-error-enum.js";

/** Schema for error response from chat.meMessage method */
export type ChatMeMessageerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatMeMessageErrorEnum;
  ok: boolean;
};

export const chatMeMessageerrorschema1ErrorSchema: Schema<ChatMeMessageerrorschema1Error> =
  s.object<ChatMeMessageerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatMeMessageErrorEnumSchema,
    ok: s.boolean(),
  });
