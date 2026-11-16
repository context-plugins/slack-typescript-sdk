import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.archive */
export type AdminConversationsArchiveschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsArchiveschemaSchema: Schema<AdminConversationsArchiveschema> =
  s.object<AdminConversationsArchiveschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
