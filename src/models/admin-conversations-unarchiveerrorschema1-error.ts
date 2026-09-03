import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetConversationPrefsErrorEnumSchema,
  type AdminConversationsGetConversationPrefsErrorEnum,
} from "./admin-conversations-get-conversation-prefs-error-enum.js";

export type AdminConversationsUnarchiveerrorschema1Error = {
  error: AdminConversationsGetConversationPrefsErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema1ErrorSchema: Schema<AdminConversationsUnarchiveerrorschema1Error> =
  s.object<AdminConversationsUnarchiveerrorschema1Error>({
    error: adminConversationsGetConversationPrefsErrorEnumSchema,
    ok: s.literal("False"),
  });
