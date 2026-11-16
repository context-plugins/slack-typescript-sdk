import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.deleteScheduledMessage method */
export type ChatDeleteScheduledMessageschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatDeleteScheduledMessageschemaSchema: Schema<ChatDeleteScheduledMessageschema> =
  s.object<ChatDeleteScheduledMessageschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
