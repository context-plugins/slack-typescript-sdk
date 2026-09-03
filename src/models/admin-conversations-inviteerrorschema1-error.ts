import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsInviteErrorEnumSchema,
  type AdminConversationsInviteErrorEnum,
} from "./admin-conversations-invite-error-enum.js";

export type AdminConversationsInviteerrorschema1Error = {
  error: AdminConversationsInviteErrorEnum;
  ok: "False";
};

export const adminConversationsInviteerrorschema1ErrorSchema: Schema<AdminConversationsInviteerrorschema1Error> =
  s.object<AdminConversationsInviteerrorschema1Error>({
    error: adminConversationsInviteErrorEnumSchema,
    ok: s.literal("False"),
  });
