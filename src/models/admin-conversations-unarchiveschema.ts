import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsUnarchiveschema = {
  ok: "True";
};

export const adminConversationsUnarchiveschemaSchema: Schema<AdminConversationsUnarchiveschema> =
  s.object<AdminConversationsUnarchiveschema>({
    ok: s.literal("True"),
  });
