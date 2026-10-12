import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.archive */
export type AdminConversationsArchiveschema = {
  ok: boolean;
};

export const adminConversationsArchiveschemaSchema: Schema<AdminConversationsArchiveschema> =
  s.object<AdminConversationsArchiveschema>({
    ok: s.boolean(),
  });
