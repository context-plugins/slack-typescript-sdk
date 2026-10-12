import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response of chat.delete method */
export type ChatDeletesuccessschema = {
  channel: string;
  ok: boolean;
  ts: string;
};

export const chatDeletesuccessschemaSchema: Schema<ChatDeletesuccessschema> =
  s.object<ChatDeletesuccessschema>({
    channel: s.string(),
    ok: s.boolean(),
    ts: s.string(),
  });
