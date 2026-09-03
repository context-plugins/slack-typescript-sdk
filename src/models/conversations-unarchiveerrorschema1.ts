import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsUnarchiveErrorEnumSchema,
  type ConversationsUnarchiveErrorEnum,
} from "./conversations-unarchive-error-enum.js";

export type ConversationsUnarchiveerrorschema1 = {
  callstack?: string;
  error: ConversationsUnarchiveErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsUnarchiveerrorschema1Schema: Schema<ConversationsUnarchiveerrorschema1> =
  s.object<ConversationsUnarchiveerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsUnarchiveErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
