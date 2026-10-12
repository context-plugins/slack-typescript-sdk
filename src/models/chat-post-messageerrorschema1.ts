import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
};

export const chatPostMessageerrorschema1Schema: Schema<ChatPostMessageerrorschema1> =
  s.object<ChatPostMessageerrorschema1>({
    callstack: s.optional(s.string()),
    error: chatPostMessageErrorEnumSchema,
    ok: s.boolean(),
  });
