import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.mark method */
export type ConversationsMarksuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsMarksuccessschemaSchema: Schema<ConversationsMarksuccessschema> =
  s.object<ConversationsMarksuccessschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
