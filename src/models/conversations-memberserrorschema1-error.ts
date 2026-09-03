import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsMembersErrorEnumSchema,
  type ConversationsMembersErrorEnum,
} from "./conversations-members-error-enum.js";

export type ConversationsMemberserrorschema1Error = {
  callstack?: string;
  error: ConversationsMembersErrorEnum;
  ok: "False";
};

export const conversationsMemberserrorschema1ErrorSchema: Schema<ConversationsMemberserrorschema1Error> =
  s.object<ConversationsMemberserrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsMembersErrorEnumSchema,
    ok: s.literal("False"),
  });
