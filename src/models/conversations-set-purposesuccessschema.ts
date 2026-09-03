import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsSetPurposesuccessschema = {
  channel: Record<string, unknown>;
  ok: "True";
};

export const conversationsSetPurposesuccessschemaSchema: Schema<ConversationsSetPurposesuccessschema> =
  s.object<ConversationsSetPurposesuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.literal("True"),
  });
