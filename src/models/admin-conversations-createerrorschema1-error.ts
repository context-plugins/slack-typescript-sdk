import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsCreateErrorEnumSchema,
  type AdminConversationsCreateErrorEnum,
} from "./admin-conversations-create-error-enum.js";

/** Schema for error response from admin.conversations.create */
export type AdminConversationsCreateerrorschema1Error = {
  error: AdminConversationsCreateErrorEnum;
  ok: boolean;
};

export const adminConversationsCreateerrorschema1ErrorSchema: Schema<AdminConversationsCreateerrorschema1Error> =
  s.object<AdminConversationsCreateerrorschema1Error>({
    error: adminConversationsCreateErrorEnumSchema,
    ok: s.boolean(),
  });
