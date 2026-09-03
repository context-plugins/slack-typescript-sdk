import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsSetConversationPrefsErrorEnumSchema,
  type AdminConversationsSetConversationPrefsErrorEnum,
} from "./admin-conversations-set-conversation-prefs-error-enum.js";

export type AdminConversationsSetConversationPrefserrorschema1Error = {
  error: AdminConversationsSetConversationPrefsErrorEnum;
  ok: "False";
};

export const adminConversationsSetConversationPrefserrorschema1ErrorSchema: Schema<AdminConversationsSetConversationPrefserrorschema1Error> =
  s.object<AdminConversationsSetConversationPrefserrorschema1Error>({
    error: adminConversationsSetConversationPrefsErrorEnumSchema,
    ok: s.literal("False"),
  });
