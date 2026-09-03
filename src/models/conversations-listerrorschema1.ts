import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsListErrorEnumSchema,
  type ConversationsListErrorEnum,
} from "./conversations-list-error-enum.js";

export type ConversationsListerrorschema1 = {
  callstack?: string;
  error: ConversationsListErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsListerrorschema1Schema: Schema<ConversationsListerrorschema1> =
  s.object<ConversationsListerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsListErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
