import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsSetPurposeErrorEnumSchema,
  type ConversationsSetPurposeErrorEnum,
} from "./conversations-set-purpose-error-enum.js";

export type ConversationsSetPurposeerrorschema1Error = {
  callstack?: string;
  error: ConversationsSetPurposeErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsSetPurposeerrorschema1ErrorSchema: Schema<ConversationsSetPurposeerrorschema1Error> =
  s.object<ConversationsSetPurposeerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsSetPurposeErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
