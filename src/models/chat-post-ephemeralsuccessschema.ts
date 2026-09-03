import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatPostEphemeralsuccessschema = {
  messageTs: string;
  ok: "True";
};

export const chatPostEphemeralsuccessschemaSchema: Schema<ChatPostEphemeralsuccessschema> =
  s.object<ChatPostEphemeralsuccessschema>({
    messageTs: s.string(),
    ok: s.literal("True"),
    _keysMap: {
      messageTs: "message_ts",
    },
  });
