import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chatMeMessageErrorEnumSchema, type ChatMeMessageErrorEnum } from "./chat-me-message-error-enum.js";

/** Schema for error response from chat.meMessage method */
export type ChatMeMessageerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatMeMessageErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatMeMessageerrorschema1Schema: Schema<ChatMeMessageerrorschema1> =
  s.object<ChatMeMessageerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: chatMeMessageErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
