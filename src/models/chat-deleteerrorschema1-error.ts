import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chatDeleteErrorEnumSchema, type ChatDeleteErrorEnum } from "./chat-delete-error-enum.js";

/** Schema for error response from chat.delete method */
export type ChatDeleteerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatDeleteErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatDeleteerrorschema1ErrorSchema: Schema<ChatDeleteerrorschema1Error> =
  s.object<ChatDeleteerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: chatDeleteErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
