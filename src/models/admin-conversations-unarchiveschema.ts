import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.unarchive */
export type AdminConversationsUnarchiveschema = {
  ok: boolean;
};

export const adminConversationsUnarchiveschemaSchema: Schema<AdminConversationsUnarchiveschema> =
  s.object<AdminConversationsUnarchiveschema>({
    ok: s.boolean(),
  });
