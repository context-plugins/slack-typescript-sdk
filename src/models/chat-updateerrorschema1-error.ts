import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatUpdateErrorEnumSchema, type ChatUpdateErrorEnum } from "./chat-update-error-enum.js";

export type ChatUpdateerrorschema1Error = {
  callstack?: string;
  error: ChatUpdateErrorEnum;
  ok: "False";
};

export const chatUpdateerrorschema1ErrorSchema: Schema<ChatUpdateerrorschema1Error> =
  s.object<ChatUpdateerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatUpdateErrorEnumSchema,
    ok: s.literal("False"),
  });
