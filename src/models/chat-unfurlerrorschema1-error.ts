import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUnfurlErrorEnumSchema, type ChatUnfurlErrorEnum } from "./chat-unfurl-error-enum.js";

/** Schema for error response from chat.unfurl method */
export type ChatUnfurlerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatUnfurlErrorEnum;
  ok: boolean;
};

export const chatUnfurlerrorschema1ErrorSchema: Schema<ChatUnfurlerrorschema1Error> =
  s.object<ChatUnfurlerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatUnfurlErrorEnumSchema,
    ok: s.boolean(),
  });
