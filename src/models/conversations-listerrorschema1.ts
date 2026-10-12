import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsListErrorEnumSchema,
  type ConversationsListErrorEnum,
} from "./conversations-list-error-enum.js";

/** Schema for error response from conversations.list method */
export type ConversationsListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsListErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsListerrorschema1Schema: Schema<ConversationsListerrorschema1> =
  s.object<ConversationsListerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsListErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
