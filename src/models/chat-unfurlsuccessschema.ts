import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatUnfurlsuccessschema = {
  ok: "True";
};

export const chatUnfurlsuccessschemaSchema: Schema<ChatUnfurlsuccessschema> =
  s.object<ChatUnfurlsuccessschema>({
    ok: s.literal("True"),
  });
