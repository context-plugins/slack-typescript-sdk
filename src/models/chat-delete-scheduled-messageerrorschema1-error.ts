import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatDeleteScheduledMessageerrorschema1ErrorSchema: Schema<ChatDeleteScheduledMessageerrorschema1Error> =
  s.object<ChatDeleteScheduledMessageerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: chatDeleteScheduledMessageErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
