import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsRenamesuccessschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsRenamesuccessschemaSchema: Schema<ConversationsRenamesuccessschema> =
  s.object<ConversationsRenamesuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
