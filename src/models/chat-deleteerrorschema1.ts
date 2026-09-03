import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatDeleteErrorEnumSchema, type ChatDeleteErrorEnum } from "./chat-delete-error-enum.js";

export type ChatDeleteerrorschema1 = {
  callstack?: string;
  error: ChatDeleteErrorEnum;
  ok: "False";
};

export const chatDeleteerrorschema1Schema: Schema<ChatDeleteerrorschema1> = s.object<ChatDeleteerrorschema1>({
  callstack: s.optional(s.string()),
  error: chatDeleteErrorEnumSchema,
  ok: s.literal("False"),
});
