import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsRenameErrorEnumSchema,
  type AdminConversationsRenameErrorEnum,
} from "./admin-conversations-rename-error-enum.js";

/** Schema for error response from admin.conversations.rename */
export type AdminConversationsUnarchiveerrorschema21 = {
  error: AdminConversationsRenameErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsUnarchiveerrorschema21Schema: Schema<AdminConversationsUnarchiveerrorschema21> =
  s.object<AdminConversationsUnarchiveerrorschema21>(
    {
      error: adminConversationsRenameErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
