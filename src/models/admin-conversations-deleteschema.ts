import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.delete */
export type AdminConversationsDeleteschema = {
  ok: boolean;
};

export const adminConversationsDeleteschemaSchema: Schema<AdminConversationsDeleteschema> =
  s.object<AdminConversationsDeleteschema>({
    ok: s.boolean(),
  });
