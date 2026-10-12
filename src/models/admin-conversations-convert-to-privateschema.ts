import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.convertToPrivate */
export type AdminConversationsConvertToPrivateschema = {
  ok: boolean;
};

export const adminConversationsConvertToPrivateschemaSchema: Schema<AdminConversationsConvertToPrivateschema> =
  s.object<AdminConversationsConvertToPrivateschema>({
    ok: s.boolean(),
  });
