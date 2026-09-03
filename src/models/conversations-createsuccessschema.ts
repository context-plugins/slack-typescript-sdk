import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsCreatesuccessschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsCreatesuccessschemaSchema: Schema<ConversationsCreatesuccessschema> =
  s.object<ConversationsCreatesuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
