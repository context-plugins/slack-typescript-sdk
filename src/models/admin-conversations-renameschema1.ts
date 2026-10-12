import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.rename */
export type AdminConversationsRenameschema1 = {
  ok: boolean;
};

export const adminConversationsRenameschema1Schema: Schema<AdminConversationsRenameschema1> =
  s.object<AdminConversationsRenameschema1>({
    ok: s.boolean(),
  });
