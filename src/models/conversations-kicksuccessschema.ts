import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.kick method */
export type ConversationsKicksuccessschema = {
  ok: boolean;
};

export const conversationsKicksuccessschemaSchema: Schema<ConversationsKicksuccessschema> =
  s.object<ConversationsKicksuccessschema>({
    ok: s.boolean(),
  });
