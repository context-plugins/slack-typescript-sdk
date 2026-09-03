import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsKicksuccessschema = {
  ok: "True";
};

export const conversationsKicksuccessschemaSchema: Schema<ConversationsKicksuccessschema> =
  s.object<ConversationsKicksuccessschema>({
    ok: s.literal("True"),
  });
