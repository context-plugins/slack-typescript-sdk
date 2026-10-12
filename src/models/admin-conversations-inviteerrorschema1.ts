import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsInviteErrorEnumSchema,
  type AdminConversationsInviteErrorEnum,
} from "./admin-conversations-invite-error-enum.js";

/** Schema for error response from admin.conversations.invite */
export type AdminConversationsInviteerrorschema1 = {
  error: AdminConversationsInviteErrorEnum;
  ok: boolean;
};

export const adminConversationsInviteerrorschema1Schema: Schema<AdminConversationsInviteerrorschema1> =
  s.object<AdminConversationsInviteerrorschema1>({
    error: adminConversationsInviteErrorEnumSchema,
    ok: s.boolean(),
  });
