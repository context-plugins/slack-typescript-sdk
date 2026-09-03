import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatMeMessageschema = {
  channel?: string;
  ok: "True";
  ts?: string;
};

export const chatMeMessageschemaSchema: Schema<ChatMeMessageschema> = s.object<ChatMeMessageschema>({
  channel: s.optional(s.string()),
  ok: s.literal("True"),
  ts: s.optional(s.string()),
});
