import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsMarksuccessschema = {
  ok: "True";
};

export const conversationsMarksuccessschemaSchema: Schema<ConversationsMarksuccessschema> =
  s.object<ConversationsMarksuccessschema>({
    ok: s.literal("True"),
  });
