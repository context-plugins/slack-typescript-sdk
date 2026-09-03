import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsRenameErrorEnumSchema,
  type ConversationsRenameErrorEnum,
} from "./conversations-rename-error-enum.js";

export type ConversationsRenameerrorschema1Error = {
  callstack?: string;
  error: ConversationsRenameErrorEnum;
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsRenameerrorschema1ErrorSchema: Schema<ConversationsRenameerrorschema1Error> =
  s.object<ConversationsRenameerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: conversationsRenameErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
