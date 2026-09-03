import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsHistoryErrorEnumSchema,
  type ConversationsHistoryErrorEnum,
} from "./conversations-history-error-enum.js";

export type ConversationsHistoryerrorschema1Error = {
  callstack?: string;
  error: ConversationsHistoryErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsHistoryerrorschema1ErrorSchema: Schema<ConversationsHistoryerrorschema1Error> =
  s.object<ConversationsHistoryerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsHistoryErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
