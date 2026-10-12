import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsLeaveErrorEnumSchema,
  type ConversationsLeaveErrorEnum,
} from "./conversations-leave-error-enum.js";

/** Schema for error response from conversations.leave method */
export type ConversationsLeaveerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsLeaveErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsLeaveerrorschema1ErrorSchema: Schema<ConversationsLeaveerrorschema1Error> =
  s.object<ConversationsLeaveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsLeaveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
