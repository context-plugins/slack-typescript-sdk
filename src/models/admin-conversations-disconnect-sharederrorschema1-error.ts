import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsDisconnectSharedErrorEnumSchema,
  type AdminConversationsDisconnectSharedErrorEnum,
} from "./admin-conversations-disconnect-shared-error-enum.js";

/** Schema for error response from admin.conversations.disconnectShared */
export type AdminConversationsDisconnectSharederrorschema1Error = {
  error: AdminConversationsDisconnectSharedErrorEnum;
  ok: boolean;
};

export const adminConversationsDisconnectSharederrorschema1ErrorSchema: Schema<AdminConversationsDisconnectSharederrorschema1Error> =
  s.object<AdminConversationsDisconnectSharederrorschema1Error>({
    error: adminConversationsDisconnectSharedErrorEnumSchema,
    ok: s.boolean(),
  });
