import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsJoinErrorEnumSchema,
  type ConversationsJoinErrorEnum,
} from "./conversations-join-error-enum.js";

/** Schema for error response from conversations.join method */
export type ConversationsJoinerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsJoinErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsJoinerrorschema1Schema: Schema<ConversationsJoinerrorschema1> =
  s.object<ConversationsJoinerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsJoinErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
