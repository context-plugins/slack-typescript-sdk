import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsArchivesuccessschema = {
  ok: "True";
};

export const conversationsArchivesuccessschemaSchema: Schema<ConversationsArchivesuccessschema> =
  s.object<ConversationsArchivesuccessschema>({
    ok: s.literal("True"),
  });
