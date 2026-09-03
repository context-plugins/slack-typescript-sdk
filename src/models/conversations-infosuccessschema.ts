import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsInfosuccessschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsInfosuccessschemaSchema: Schema<ConversationsInfosuccessschema> =
  s.object<ConversationsInfosuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
