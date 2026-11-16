import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsDisconnectSharedErrorEnumSchema,
  type AdminConversationsDisconnectSharedErrorEnum,
} from "./admin-conversations-disconnect-shared-error-enum.js";

/** Schema for error response from admin.conversations.disconnectShared */
export type AdminConversationsDisconnectSharederrorschema1 = {
  error: AdminConversationsDisconnectSharedErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsDisconnectSharederrorschema1Schema: Schema<AdminConversationsDisconnectSharederrorschema1> =
  s.object<AdminConversationsDisconnectSharederrorschema1>(
    {
      error: adminConversationsDisconnectSharedErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
