import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsUnarchiveErrorEnumSchema,
  type AdminConversationsUnarchiveErrorEnum,
} from "./admin-conversations-unarchive-error-enum.js";

/** Schema for error response from admin.conversations.unarchive */
export type AdminConversationsUnarchiveerrorschema31 = {
  error: AdminConversationsUnarchiveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsUnarchiveerrorschema31Schema: Schema<AdminConversationsUnarchiveerrorschema31> =
  s.object<AdminConversationsUnarchiveerrorschema31>(
    {
      error: adminConversationsUnarchiveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
