import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.postEphemeral method */
export type ChatPostEphemeralsuccessschema = {
  messageTs: string;
  ok: boolean;
};

export const chatPostEphemeralsuccessschemaSchema: Schema<ChatPostEphemeralsuccessschema> =
  s.object<ChatPostEphemeralsuccessschema>({
    messageTs: s.string(),
    ok: s.boolean(),
    _keysMap: {
      messageTs: "message_ts",
    },
  });
