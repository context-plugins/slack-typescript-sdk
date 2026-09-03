import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatDeleteScheduledMessageschema = {
  ok: "True";
};

export const chatDeleteScheduledMessageschemaSchema: Schema<ChatDeleteScheduledMessageschema> =
  s.object<ChatDeleteScheduledMessageschema>({
    ok: s.literal("True"),
  });
