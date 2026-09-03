import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsLeaveErrorEnumSchema,
  type ConversationsLeaveErrorEnum,
} from "./conversations-leave-error-enum.js";

export type ConversationsLeaveerrorschema1 = {
  callstack?: string;
  error: ConversationsLeaveErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsLeaveerrorschema1Schema: Schema<ConversationsLeaveerrorschema1> =
  s.object<ConversationsLeaveerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsLeaveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
