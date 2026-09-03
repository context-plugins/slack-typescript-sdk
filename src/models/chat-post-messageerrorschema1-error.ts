import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chatPostMessageErrorEnumSchema,
  type ChatPostMessageErrorEnum,
} from "./chat-post-message-error-enum.js";

export type ChatPostMessageerrorschema1Error = {
  callstack?: string;
  error: ChatPostMessageErrorEnum;
  ok: "False";
};

export const chatPostMessageerrorschema1ErrorSchema: Schema<ChatPostMessageerrorschema1Error> =
  s.object<ChatPostMessageerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: chatPostMessageErrorEnumSchema,
    ok: s.literal("False"),
  });
