import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from conversations.unarchive method */
export type ConversationsUnarchivesuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsUnarchivesuccessschemaSchema: Schema<ConversationsUnarchivesuccessschema> =
  s.object<ConversationsUnarchivesuccessschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
