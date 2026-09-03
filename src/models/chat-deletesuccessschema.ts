import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatDeletesuccessschema = {
  channel: string;
  ok: "True";
  ts: string;
};

export const chatDeletesuccessschemaSchema: Schema<ChatDeletesuccessschema> =
  s.object<ChatDeletesuccessschema>({
    channel: s.string(),
    ok: s.literal("True"),
    ts: s.string(),
  });
