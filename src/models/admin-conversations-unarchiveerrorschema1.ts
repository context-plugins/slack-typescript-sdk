import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetConversationPrefsErrorEnumSchema,
  type AdminConversationsGetConversationPrefsErrorEnum,
} from "./admin-conversations-get-conversation-prefs-error-enum.js";

/** Schema for error response from admin.conversations.getConversationPrefs */
export type AdminConversationsUnarchiveerrorschema1 = {
  error: AdminConversationsGetConversationPrefsErrorEnum;
  ok: boolean;
};

export const adminConversationsUnarchiveerrorschema1Schema: Schema<AdminConversationsUnarchiveerrorschema1> =
  s.object<AdminConversationsUnarchiveerrorschema1>({
    error: adminConversationsGetConversationPrefsErrorEnumSchema,
    ok: s.boolean(),
  });
