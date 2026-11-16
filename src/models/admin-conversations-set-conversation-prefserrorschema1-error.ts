import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsSetConversationPrefsErrorEnumSchema,
  type AdminConversationsSetConversationPrefsErrorEnum,
} from "./admin-conversations-set-conversation-prefs-error-enum.js";

/** Schema for error response from admin.conversations.setConversationPrefs */
export type AdminConversationsSetConversationPrefserrorschema1Error = {
  error: AdminConversationsSetConversationPrefsErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsSetConversationPrefserrorschema1ErrorSchema: Schema<AdminConversationsSetConversationPrefserrorschema1Error> =
  s.object<AdminConversationsSetConversationPrefserrorschema1Error>(
    {
      error: adminConversationsSetConversationPrefsErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
