import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsMarkErrorEnumSchema,
  type ConversationsMarkErrorEnum,
} from "./conversations-mark-error-enum.js";

/** Schema for error response from conversations.mark method */
export type ConversationsMarkerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsMarkErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsMarkerrorschema1Schema: Schema<ConversationsMarkerrorschema1> =
  s.object<ConversationsMarkerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsMarkErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
