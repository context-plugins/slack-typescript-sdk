import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.disconnectShared */
export type AdminConversationsRenameschema = {
  ok: boolean;
};

export const adminConversationsRenameschemaSchema: Schema<AdminConversationsRenameschema> =
  s.object<AdminConversationsRenameschema>({
    ok: s.boolean(),
  });
