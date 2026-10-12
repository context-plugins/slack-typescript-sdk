import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsUnarchiveErrorEnumSchema,
  type AdminConversationsUnarchiveErrorEnum,
} from "./admin-conversations-unarchive-error-enum.js";

/** Schema for error response from admin.conversations.unarchive */
export type AdminConversationsUnarchiveerrorschema31Error = {
  error: AdminConversationsUnarchiveErrorEnum;
  ok: boolean;
};

export const adminConversationsUnarchiveerrorschema31ErrorSchema: Schema<AdminConversationsUnarchiveerrorschema31Error> =
  s.object<AdminConversationsUnarchiveerrorschema31Error>({
    error: adminConversationsUnarchiveErrorEnumSchema,
    ok: s.boolean(),
  });
