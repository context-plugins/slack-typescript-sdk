import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsInviteErrorEnumSchema,
  type AdminConversationsInviteErrorEnum,
} from "./admin-conversations-invite-error-enum.js";

export type AdminConversationsInviteerrorschema1 = {
  error: AdminConversationsInviteErrorEnum;
  ok: "False";
};

export const adminConversationsInviteerrorschema1Schema: Schema<AdminConversationsInviteerrorschema1> =
  s.object<AdminConversationsInviteerrorschema1>({
    error: adminConversationsInviteErrorEnumSchema,
    ok: s.literal("False"),
  });
