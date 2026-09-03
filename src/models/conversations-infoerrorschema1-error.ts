import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsInfoErrorEnumSchema,
  type ConversationsInfoErrorEnum,
} from "./conversations-info-error-enum.js";

export type ConversationsInfoerrorschema1Error = {
  callstack?: string;
  error: ConversationsInfoErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsInfoerrorschema1ErrorSchema: Schema<ConversationsInfoerrorschema1Error> =
  s.object<ConversationsInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsInfoErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
