import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsUnarchivesuccessschema = {
  ok: "True";
};

export const conversationsUnarchivesuccessschemaSchema: Schema<ConversationsUnarchivesuccessschema> =
  s.object<ConversationsUnarchivesuccessschema>({
    ok: s.literal("True"),
  });
