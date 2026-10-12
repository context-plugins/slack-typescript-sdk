import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsArchiveErrorEnumSchema,
  type AdminConversationsArchiveErrorEnum,
} from "./admin-conversations-archive-error-enum.js";

/** Schema for error response from admin.conversations.archive */
export type AdminConversationsArchiveerrorschema1 = {
  error: AdminConversationsArchiveErrorEnum;
  ok: boolean;
};

export const adminConversationsArchiveerrorschema1Schema: Schema<AdminConversationsArchiveerrorschema1> =
  s.object<AdminConversationsArchiveerrorschema1>({
    error: adminConversationsArchiveErrorEnumSchema,
    ok: s.boolean(),
  });
