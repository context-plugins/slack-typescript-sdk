import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsArchiveErrorEnumSchema,
  type ConversationsArchiveErrorEnum,
} from "./conversations-archive-error-enum.js";

/** Schema for error response from conversations.archive method */
export type ConversationsArchiveerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsArchiveErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsArchiveerrorschema1Schema: Schema<ConversationsArchiveerrorschema1> =
  s.object<ConversationsArchiveerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsArchiveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
