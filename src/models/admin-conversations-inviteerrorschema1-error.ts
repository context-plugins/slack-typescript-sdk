import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsInviteErrorEnumSchema,
  type AdminConversationsInviteErrorEnum,
} from "./admin-conversations-invite-error-enum.js";

/** Schema for error response from admin.conversations.invite */
export type AdminConversationsInviteerrorschema1Error = {
  error: AdminConversationsInviteErrorEnum;
  ok: boolean;
};

export const adminConversationsInviteerrorschema1ErrorSchema: Schema<AdminConversationsInviteerrorschema1Error> =
  s.object<AdminConversationsInviteerrorschema1Error>({
    error: adminConversationsInviteErrorEnumSchema,
    ok: s.boolean(),
  });
