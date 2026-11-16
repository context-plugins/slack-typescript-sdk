import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.rename */
export type AdminConversationsRenameschema1 = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsRenameschema1Schema: Schema<AdminConversationsRenameschema1> =
  s.object<AdminConversationsRenameschema1>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
