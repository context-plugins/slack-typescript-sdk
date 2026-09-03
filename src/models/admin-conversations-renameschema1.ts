import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsRenameschema1 = {
  ok: "True";
};

export const adminConversationsRenameschema1Schema: Schema<AdminConversationsRenameschema1> =
  s.object<AdminConversationsRenameschema1>({
    ok: s.literal("True"),
  });
