import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsOpenErrorEnumSchema,
  type ConversationsOpenErrorEnum,
} from "./conversations-open-error-enum.js";

export type ConversationsOpenerrorschema1Error = {
  callstack?: string;
  error: ConversationsOpenErrorEnum;
  ok: "False";
};

export const conversationsOpenerrorschema1ErrorSchema: Schema<ConversationsOpenerrorschema1Error> =
  s.object<ConversationsOpenerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsOpenErrorEnumSchema,
    ok: s.literal("False"),
  });
