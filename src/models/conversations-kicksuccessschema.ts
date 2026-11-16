import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.kick method */
export type ConversationsKicksuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsKicksuccessschemaSchema: Schema<ConversationsKicksuccessschema> =
  s.object<ConversationsKicksuccessschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
