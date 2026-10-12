import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.unfurl method */
export type ChatUnfurlsuccessschema = {
  ok: boolean;
};

export const chatUnfurlsuccessschemaSchema: Schema<ChatUnfurlsuccessschema> =
  s.object<ChatUnfurlsuccessschema>({
    ok: s.boolean(),
  });
