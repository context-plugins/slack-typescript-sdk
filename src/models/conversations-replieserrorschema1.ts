import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsRepliesErrorEnumSchema,
  type ConversationsRepliesErrorEnum,
} from "./conversations-replies-error-enum.js";

export type ConversationsReplieserrorschema1 = {
  callstack?: string;
  error: ConversationsRepliesErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsReplieserrorschema1Schema: Schema<ConversationsReplieserrorschema1> =
  s.object<ConversationsReplieserrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsRepliesErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
