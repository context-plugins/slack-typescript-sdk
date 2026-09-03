import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsDeleteschema = {
  ok: "True";
};

export const adminConversationsDeleteschemaSchema: Schema<AdminConversationsDeleteschema> =
  s.object<AdminConversationsDeleteschema>({
    ok: s.literal("True"),
  });
