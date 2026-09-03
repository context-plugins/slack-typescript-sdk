import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsUnarchiveErrorEnumSchema,
  type ConversationsUnarchiveErrorEnum,
} from "./conversations-unarchive-error-enum.js";

export type ConversationsUnarchiveerrorschema1Error = {
  callstack?: string;
  error: ConversationsUnarchiveErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsUnarchiveerrorschema1ErrorSchema: Schema<ConversationsUnarchiveerrorschema1Error> =
  s.object<ConversationsUnarchiveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsUnarchiveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
