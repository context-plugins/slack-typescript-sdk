import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.deleteScheduledMessage method */
export type ChatDeleteScheduledMessageschema = {
  ok: boolean;
};

export const chatDeleteScheduledMessageschemaSchema: Schema<ChatDeleteScheduledMessageschema> =
  s.object<ChatDeleteScheduledMessageschema>({
    ok: s.boolean(),
  });
