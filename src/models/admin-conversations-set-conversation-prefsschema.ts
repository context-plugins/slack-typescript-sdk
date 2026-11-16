import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.setConversationPrefs */
export type AdminConversationsSetConversationPrefsschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsSetConversationPrefsschemaSchema: Schema<AdminConversationsSetConversationPrefsschema> =
  s.object<AdminConversationsSetConversationPrefsschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
