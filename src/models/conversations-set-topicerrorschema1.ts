import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsSetPurposeErrorEnumSchema,
  type ConversationsSetPurposeErrorEnum,
} from "./conversations-set-purpose-error-enum.js";

export type ConversationsSetTopicerrorschema1 = {
  callstack?: string;
  error: ConversationsSetPurposeErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsSetTopicerrorschema1Schema: Schema<ConversationsSetTopicerrorschema1> =
  s.object<ConversationsSetTopicerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsSetPurposeErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
