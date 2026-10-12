import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsOpenErrorEnumSchema,
  type ConversationsOpenErrorEnum,
} from "./conversations-open-error-enum.js";

/** Schema for error response from conversations.open method */
export type ConversationsOpenerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsOpenErrorEnum;
  ok: boolean;
};

export const conversationsOpenerrorschema1Schema: Schema<ConversationsOpenerrorschema1> =
  s.object<ConversationsOpenerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsOpenErrorEnumSchema,
    ok: s.boolean(),
  });
