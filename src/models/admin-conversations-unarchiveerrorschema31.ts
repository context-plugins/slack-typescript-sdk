import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsUnarchiveErrorEnumSchema,
  type AdminConversationsUnarchiveErrorEnum,
} from "./admin-conversations-unarchive-error-enum.js";

/** Schema for error response from admin.conversations.unarchive */
export type AdminConversationsUnarchiveerrorschema31 = {
  error: AdminConversationsUnarchiveErrorEnum;
  ok: boolean;
};

export const adminConversationsUnarchiveerrorschema31Schema: Schema<AdminConversationsUnarchiveerrorschema31> =
  s.object<AdminConversationsUnarchiveerrorschema31>({
    error: adminConversationsUnarchiveErrorEnumSchema,
    ok: s.boolean(),
  });
