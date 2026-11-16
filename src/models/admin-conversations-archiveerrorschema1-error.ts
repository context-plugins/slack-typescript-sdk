import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsArchiveErrorEnumSchema,
  type AdminConversationsArchiveErrorEnum,
} from "./admin-conversations-archive-error-enum.js";

/** Schema for error response from admin.conversations.archive */
export type AdminConversationsArchiveerrorschema1Error = {
  error: AdminConversationsArchiveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsArchiveerrorschema1ErrorSchema: Schema<AdminConversationsArchiveerrorschema1Error> =
  s.object<AdminConversationsArchiveerrorschema1Error>(
    {
      error: adminConversationsArchiveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
