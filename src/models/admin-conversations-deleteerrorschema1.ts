import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsDeleteErrorEnumSchema,
  type AdminConversationsDeleteErrorEnum,
} from "./admin-conversations-delete-error-enum.js";

/** Schema for error response from admin.conversations.delete */
export type AdminConversationsDeleteerrorschema1 = {
  error: AdminConversationsDeleteErrorEnum;
  ok: boolean;
};

export const adminConversationsDeleteerrorschema1Schema: Schema<AdminConversationsDeleteerrorschema1> =
  s.object<AdminConversationsDeleteerrorschema1>({
    error: adminConversationsDeleteErrorEnumSchema,
    ok: s.boolean(),
  });
