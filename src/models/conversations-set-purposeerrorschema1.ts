import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsSetPurposeErrorEnumSchema,
  type ConversationsSetPurposeErrorEnum,
} from "./conversations-set-purpose-error-enum.js";

/** Schema for error response from conversations.setPurpose method */
export type ConversationsSetPurposeerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsSetPurposeErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsSetPurposeerrorschema1Schema: Schema<ConversationsSetPurposeerrorschema1> =
  s.object<ConversationsSetPurposeerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsSetPurposeErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
