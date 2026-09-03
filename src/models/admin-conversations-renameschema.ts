import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsRenameschema = {
  ok: "True";
};

export const adminConversationsRenameschemaSchema: Schema<AdminConversationsRenameschema> =
  s.object<AdminConversationsRenameschema>({
    ok: s.literal("True"),
  });
