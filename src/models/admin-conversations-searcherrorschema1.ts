import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsSearchErrorEnumSchema,
  type AdminConversationsSearchErrorEnum,
} from "./admin-conversations-search-error-enum.js";

/** Schema for error response from admin.conversations.search */
export type AdminConversationsSearcherrorschema1 = {
  error: AdminConversationsSearchErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsSearcherrorschema1Schema: Schema<AdminConversationsSearcherrorschema1> =
  s.object<AdminConversationsSearcherrorschema1>(
    {
      error: adminConversationsSearchErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
