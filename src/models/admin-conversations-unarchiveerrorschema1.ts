import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetConversationPrefsErrorEnumSchema,
  type AdminConversationsGetConversationPrefsErrorEnum,
} from "./admin-conversations-get-conversation-prefs-error-enum.js";

/** Schema for error response from admin.conversations.getConversationPrefs */
export type AdminConversationsUnarchiveerrorschema1 = {
  error: AdminConversationsGetConversationPrefsErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsUnarchiveerrorschema1Schema: Schema<AdminConversationsUnarchiveerrorschema1> =
  s.object<AdminConversationsUnarchiveerrorschema1>(
    {
      error: adminConversationsGetConversationPrefsErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
