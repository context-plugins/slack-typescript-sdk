import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsDeleteErrorEnumSchema,
  type AdminConversationsDeleteErrorEnum,
} from "./admin-conversations-delete-error-enum.js";

/** Schema for error response from admin.conversations.delete */
export type AdminConversationsDeleteerrorschema1 = {
  error: AdminConversationsDeleteErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsDeleteerrorschema1Schema: Schema<AdminConversationsDeleteerrorschema1> =
  s.object<AdminConversationsDeleteerrorschema1>(
    {
      error: adminConversationsDeleteErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
