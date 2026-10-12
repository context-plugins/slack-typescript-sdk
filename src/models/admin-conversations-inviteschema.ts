import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.invite */
export type AdminConversationsInviteschema = {
  ok: boolean;
};

export const adminConversationsInviteschemaSchema: Schema<AdminConversationsInviteschema> =
  s.object<AdminConversationsInviteschema>({
    ok: s.boolean(),
  });
