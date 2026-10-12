import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.unarchive method */
export type ConversationsUnarchivesuccessschema = {
  ok: boolean;
};

export const conversationsUnarchivesuccessschemaSchema: Schema<ConversationsUnarchivesuccessschema> =
  s.object<ConversationsUnarchivesuccessschema>({
    ok: s.boolean(),
  });
