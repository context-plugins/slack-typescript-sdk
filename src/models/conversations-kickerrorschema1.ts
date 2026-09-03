import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsKickErrorEnumSchema,
  type ConversationsKickErrorEnum,
} from "./conversations-kick-error-enum.js";

export type ConversationsKickerrorschema1 = {
  callstack?: string;
  error: ConversationsKickErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsKickerrorschema1Schema: Schema<ConversationsKickerrorschema1> =
  s.object<ConversationsKickerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsKickErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
