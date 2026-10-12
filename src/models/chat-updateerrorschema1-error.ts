import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUpdateErrorEnumSchema, type ChatUpdateErrorEnum } from "./chat-update-error-enum.js";

/** Schema for error response chat.update method */
export type ChatUpdateerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatUpdateErrorEnum;
  ok: boolean;
};

export const chatUpdateerrorschema1ErrorSchema: Schema<ChatUpdateerrorschema1Error> =
  s.object<ChatUpdateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatUpdateErrorEnumSchema,
    ok: s.boolean(),
  });
