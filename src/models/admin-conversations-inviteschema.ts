import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsInviteschema = {
  ok: "True";
};

export const adminConversationsInviteschemaSchema: Schema<AdminConversationsInviteschema> =
  s.object<AdminConversationsInviteschema>({
    ok: s.literal("True"),
  });
