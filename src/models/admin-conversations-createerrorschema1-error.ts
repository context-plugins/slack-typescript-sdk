import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsCreateErrorEnumSchema,
  type AdminConversationsCreateErrorEnum,
} from "./admin-conversations-create-error-enum.js";

/** Schema for error response from admin.conversations.create */
export type AdminConversationsCreateerrorschema1Error = {
  error: AdminConversationsCreateErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsCreateerrorschema1ErrorSchema: Schema<AdminConversationsCreateerrorschema1Error> =
  s.object<AdminConversationsCreateerrorschema1Error>(
    {
      error: adminConversationsCreateErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
