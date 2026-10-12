import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsKickErrorEnumSchema,
  type ConversationsKickErrorEnum,
} from "./conversations-kick-error-enum.js";

/** Schema for error response conversations.kick method */
export type ConversationsKickerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsKickErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsKickerrorschema1ErrorSchema: Schema<ConversationsKickerrorschema1Error> =
  s.object<ConversationsKickerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsKickErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
