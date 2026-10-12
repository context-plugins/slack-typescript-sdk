import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.meMessage method */
export type ChatMeMessageschema = {
  channel?: string;
  ok: boolean;
  ts?: string;
};

export const chatMeMessageschemaSchema: Schema<ChatMeMessageschema> = s.object<ChatMeMessageschema>({
  channel: s.optional(s.string()),
  ok: s.boolean(),
  ts: s.optional(s.string()),
});
