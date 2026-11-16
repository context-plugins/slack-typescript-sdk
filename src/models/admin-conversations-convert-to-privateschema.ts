import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of admin.conversations.convertToPrivate */
export type AdminConversationsConvertToPrivateschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsConvertToPrivateschemaSchema: Schema<AdminConversationsConvertToPrivateschema> =
  s.object<AdminConversationsConvertToPrivateschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
