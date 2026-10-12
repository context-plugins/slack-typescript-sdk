import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response chat.getPermalink */
export type ChatGetPermalinksuccessschema = {
  channel: string;
  ok: boolean;
  permalink: string;
};

export const chatGetPermalinksuccessschemaSchema: Schema<ChatGetPermalinksuccessschema> =
  s.object<ChatGetPermalinksuccessschema>({
    channel: s.string(),
    ok: s.boolean(),
    permalink: s.string(),
  });
