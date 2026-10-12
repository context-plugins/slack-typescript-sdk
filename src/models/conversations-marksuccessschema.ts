import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.mark method */
export type ConversationsMarksuccessschema = {
  ok: boolean;
};

export const conversationsMarksuccessschemaSchema: Schema<ConversationsMarksuccessschema> =
  s.object<ConversationsMarksuccessschema>({
    ok: s.boolean(),
  });
