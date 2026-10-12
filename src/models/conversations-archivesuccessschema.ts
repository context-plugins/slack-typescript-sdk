import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.archive method */
export type ConversationsArchivesuccessschema = {
  ok: boolean;
};

export const conversationsArchivesuccessschemaSchema: Schema<ConversationsArchivesuccessschema> =
  s.object<ConversationsArchivesuccessschema>({
    ok: s.boolean(),
  });
