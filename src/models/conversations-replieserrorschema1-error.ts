import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsRepliesErrorEnumSchema,
  type ConversationsRepliesErrorEnum,
} from "./conversations-replies-error-enum.js";

/** Schema for error response from conversations.replies method */
export type ConversationsReplieserrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsRepliesErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsReplieserrorschema1ErrorSchema: Schema<ConversationsReplieserrorschema1Error> =
  s.object<ConversationsReplieserrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsRepliesErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
