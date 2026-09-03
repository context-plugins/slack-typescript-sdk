import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsOpenErrorEnumSchema,
  type ConversationsOpenErrorEnum,
} from "./conversations-open-error-enum.js";

export type ConversationsOpenerrorschema1 = {
  callstack?: string;
  error: ConversationsOpenErrorEnum;
  ok: "False";
};

export const conversationsOpenerrorschema1Schema: Schema<ConversationsOpenerrorschema1> =
  s.object<ConversationsOpenerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsOpenErrorEnumSchema,
    ok: s.literal("False"),
  });
