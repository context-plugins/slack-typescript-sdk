import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetConversationPrefsErrorEnumSchema,
  type AdminConversationsGetConversationPrefsErrorEnum,
} from "./admin-conversations-get-conversation-prefs-error-enum.js";

export type AdminConversationsUnarchiveerrorschema1 = {
  error: AdminConversationsGetConversationPrefsErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema1Schema: Schema<AdminConversationsUnarchiveerrorschema1> =
  s.object<AdminConversationsUnarchiveerrorschema1>({
    error: adminConversationsGetConversationPrefsErrorEnumSchema,
    ok: s.literal("False"),
  });
