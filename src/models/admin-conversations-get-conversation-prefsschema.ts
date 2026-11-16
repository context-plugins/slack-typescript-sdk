import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prefs1Schema, type Prefs1 } from "./prefs1.js";

/** Schema for successful response of admin.conversations.getConversationPrefs */
export type AdminConversationsGetConversationPrefsschema = {
  ok: boolean;
  prefs?: Prefs1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsGetConversationPrefsschemaSchema: Schema<AdminConversationsGetConversationPrefsschema> =
  s.object<AdminConversationsGetConversationPrefsschema>(
    {
      ok: s.boolean(),
      prefs: s.optional(s.lazy(() => prefs1Schema)),
    },
    { additionalProperties: s.json() },
  );
