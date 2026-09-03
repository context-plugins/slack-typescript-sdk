import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsSetConversationPrefsschema = {
  ok: "True";
};

export const adminConversationsSetConversationPrefsschemaSchema: Schema<AdminConversationsSetConversationPrefsschema> =
  s.object<AdminConversationsSetConversationPrefsschema>({
    ok: s.literal("True"),
  });
