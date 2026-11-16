import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chatPostMessageErrorEnumSchema,
  type ChatPostMessageErrorEnum,
} from "./chat-post-message-error-enum.js";

/** Schema for error response chat.postMessage method */
export type ChatPostMessageerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatPostMessageErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatPostMessageerrorschema1Schema: Schema<ChatPostMessageerrorschema1> =
  s.object<ChatPostMessageerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: chatPostMessageErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
