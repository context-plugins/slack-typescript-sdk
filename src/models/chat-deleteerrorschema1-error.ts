import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatDeleteErrorEnumSchema, type ChatDeleteErrorEnum } from "./chat-delete-error-enum.js";

export type ChatDeleteerrorschema1Error = {
  callstack?: string;
  error: ChatDeleteErrorEnum;
  ok: "False";
};

export const chatDeleteerrorschema1ErrorSchema: Schema<ChatDeleteerrorschema1Error> =
  s.object<ChatDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
