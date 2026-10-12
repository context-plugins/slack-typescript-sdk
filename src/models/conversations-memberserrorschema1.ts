import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsMembersErrorEnumSchema,
  type ConversationsMembersErrorEnum,
} from "./conversations-members-error-enum.js";

/** Schema for error response conversations.members method */
export type ConversationsMemberserrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsMembersErrorEnum;
  ok: boolean;
};

export const conversationsMemberserrorschema1Schema: Schema<ConversationsMemberserrorschema1> =
  s.object<ConversationsMemberserrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsMembersErrorEnumSchema,
    ok: s.boolean(),
  });
