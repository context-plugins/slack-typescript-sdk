import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUnfurlErrorEnumSchema, type ChatUnfurlErrorEnum } from "./chat-unfurl-error-enum.js";

export type ChatUnfurlerrorschema1 = {
  callstack?: string;
  error: ChatUnfurlErrorEnum;
  ok: "False";
};

export const chatUnfurlerrorschema1Schema: Schema<ChatUnfurlerrorschema1> = s.object<ChatUnfurlerrorschema1>({
  callstack: s.optional(s.string()),
  error: chatUnfurlErrorEnumSchema,
  ok: s.literal("False"),
});
