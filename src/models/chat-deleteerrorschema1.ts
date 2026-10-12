import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatDeleteErrorEnumSchema, type ChatDeleteErrorEnum } from "./chat-delete-error-enum.js";

/** Schema for error response from chat.delete method */
export type ChatDeleteerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatDeleteErrorEnum;
  ok: boolean;
};

export const chatDeleteerrorschema1Schema: Schema<ChatDeleteerrorschema1> = s.object<ChatDeleteerrorschema1>({
  callstack: s.optional(s.string()),
  error: chatDeleteErrorEnumSchema,
  ok: s.boolean(),
});
