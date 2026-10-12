import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsRenameErrorEnumSchema,
  type ConversationsRenameErrorEnum,
} from "./conversations-rename-error-enum.js";

/** Schema for error response from conversations.rename method */
export type ConversationsRenameerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ConversationsRenameErrorEnum;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export const conversationsRenameerrorschema1Schema: Schema<ConversationsRenameerrorschema1> =
  s.object<ConversationsRenameerrorschema1>({
    callstack: s.optional(s.string()),
    error: conversationsRenameErrorEnumSchema,
    needed: s.optional(s.string()),
    ok: s.boolean(),
    provided: s.optional(s.string()),
  });
