import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsInfoErrorEnumSchema,
  type ConversationsInfoErrorEnum,
} from "./conversations-info-error-enum.js";

/** Schema for error response from conversations.info method */
export type ConversationsInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsInfoErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsInfoerrorschema1Schema: Schema<ConversationsInfoerrorschema1> =
  s.object<ConversationsInfoerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsInfoErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
