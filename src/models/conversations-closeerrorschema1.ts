import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsCloseErrorEnumSchema,
  type ConversationsCloseErrorEnum,
} from "./conversations-close-error-enum.js";

/** Schema for error response from conversations.close method */
export type ConversationsCloseerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsCloseErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsCloseerrorschema1Schema: Schema<ConversationsCloseerrorschema1> =
  s.object<ConversationsCloseerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsCloseErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
