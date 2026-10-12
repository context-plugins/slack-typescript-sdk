import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.setConversationPrefs */
export type AdminConversationsSetConversationPrefsschema = {
  ok: boolean;
};

export const adminConversationsSetConversationPrefsschemaSchema: Schema<AdminConversationsSetConversationPrefsschema> =
  s.object<AdminConversationsSetConversationPrefsschema>({
    ok: s.boolean(),
  });
