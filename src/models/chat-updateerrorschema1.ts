import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUpdateErrorEnumSchema, type ChatUpdateErrorEnum } from "./chat-update-error-enum.js";

export type ChatUpdateerrorschema1 = {
  callstack?: string;
  error: ChatUpdateErrorEnum;
  ok: "False";
};

export const chatUpdateerrorschema1Schema: Schema<ChatUpdateerrorschema1> = s.object<ChatUpdateerrorschema1>({
  callstack: s.optional(s.string()),
  error: chatUpdateErrorEnumSchema,
  ok: s.literal("False"),
});
