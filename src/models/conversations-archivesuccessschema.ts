import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response conversations.archive method */
export type ConversationsArchivesuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conversationsArchivesuccessschemaSchema: Schema<ConversationsArchivesuccessschema> =
  s.object<ConversationsArchivesuccessschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
