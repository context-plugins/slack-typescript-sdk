import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsCloseErrorEnumSchema,
  type ConversationsCloseErrorEnum,
} from "./conversations-close-error-enum.js";

export type ConversationsCloseerrorschema1 = {
  callstack?: string;
  error: ConversationsCloseErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsCloseerrorschema1Schema: Schema<ConversationsCloseerrorschema1> =
  s.object<ConversationsCloseerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsCloseErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
