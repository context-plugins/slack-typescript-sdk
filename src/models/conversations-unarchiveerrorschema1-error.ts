import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsUnarchiveErrorEnumSchema,
  type ConversationsUnarchiveErrorEnum,
} from "./conversations-unarchive-error-enum.js";

/** Schema for error response from conversations.unarchive method */
export type ConversationsUnarchiveerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsUnarchiveErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsUnarchiveerrorschema1ErrorSchema: Schema<ConversationsUnarchiveerrorschema1Error> =
  s.object<ConversationsUnarchiveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsUnarchiveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
