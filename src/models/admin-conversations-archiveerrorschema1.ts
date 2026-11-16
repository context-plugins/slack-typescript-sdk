import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsArchiveErrorEnumSchema,
  type AdminConversationsArchiveErrorEnum,
} from "./admin-conversations-archive-error-enum.js";

/** Schema for error response from admin.conversations.archive */
export type AdminConversationsArchiveerrorschema1 = {
  error: AdminConversationsArchiveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsArchiveerrorschema1Schema: Schema<AdminConversationsArchiveerrorschema1> =
  s.object<AdminConversationsArchiveerrorschema1>(
    {
      error: adminConversationsArchiveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
