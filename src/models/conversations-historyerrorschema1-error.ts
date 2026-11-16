import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsHistoryErrorEnumSchema,
  type ConversationsHistoryErrorEnum,
} from "./conversations-history-error-enum.js";

/** Schema for error response from conversations.history method */
export type ConversationsHistoryerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsHistoryErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsHistoryerrorschema1ErrorSchema: Schema<ConversationsHistoryerrorschema1Error> =
  s.object<ConversationsHistoryerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: conversationsHistoryErrorEnumSchema,
      needed: s.optional(s.string()),
      ok: s.boolean(),
      provided: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
