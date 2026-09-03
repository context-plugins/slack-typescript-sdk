import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsArchiveschema = {
  ok: "True";
};

export const adminConversationsArchiveschemaSchema: Schema<AdminConversationsArchiveschema> =
  s.object<AdminConversationsArchiveschema>({
    ok: s.literal("True"),
  });
