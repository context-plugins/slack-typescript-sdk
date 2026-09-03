import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatGetPermalinksuccessschema = {
  channel: string;
  ok: "True";
  permalink: string;
};

export const chatGetPermalinksuccessschemaSchema: Schema<ChatGetPermalinksuccessschema> =
  s.object<ChatGetPermalinksuccessschema>({
    channel: s.string(),
    ok: s.literal("True"),
    permalink: s.string(),
  });
