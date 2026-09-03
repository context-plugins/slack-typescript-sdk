import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsSetConversationPrefsErrorEnumSchema,
  type AdminConversationsSetConversationPrefsErrorEnum,
} from "./admin-conversations-set-conversation-prefs-error-enum.js";

export type AdminConversationsSetConversationPrefserrorschema1 = {
  error: AdminConversationsSetConversationPrefsErrorEnum;
  ok: "False";
};

export const adminConversationsSetConversationPrefserrorschema1Schema: Schema<AdminConversationsSetConversationPrefserrorschema1> =
  s.object<AdminConversationsSetConversationPrefserrorschema1>({
    error: adminConversationsSetConversationPrefsErrorEnumSchema,
    ok: s.literal("False"),
  });
