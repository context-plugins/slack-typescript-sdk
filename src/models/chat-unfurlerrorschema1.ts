import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUnfurlErrorEnumSchema, type ChatUnfurlErrorEnum } from "./chat-unfurl-error-enum.js";

/** Schema for error response from chat.unfurl method */
export type ChatUnfurlerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ChatUnfurlErrorEnum;
  ok: boolean;
};

export const chatUnfurlerrorschema1Schema: Schema<ChatUnfurlerrorschema1> = s.object<ChatUnfurlerrorschema1>({
  callstack: s.optional(s.string()),
  error: chatUnfurlErrorEnumSchema,
  ok: s.boolean(),
});
