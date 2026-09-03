import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsMembersErrorEnumSchema,
  type ConversationsMembersErrorEnum,
} from "./conversations-members-error-enum.js";

export type ConversationsMemberserrorschema1 = {
  callstack?: string;
  error: ConversationsMembersErrorEnum;
  ok: "False";
};

export const conversationsMemberserrorschema1Schema: Schema<ConversationsMemberserrorschema1> =
  s.object<ConversationsMemberserrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsMembersErrorEnumSchema,
    ok: s.literal("False"),
  });
