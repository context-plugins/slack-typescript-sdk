import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prefs1Schema, type Prefs1 } from "./prefs1.js";

export type AdminConversationsGetConversationPrefsschema = {
  ok: "True";
  prefs?: Prefs1;
};

export const adminConversationsGetConversationPrefsschemaSchema: Schema<AdminConversationsGetConversationPrefsschema> =
  s.object<AdminConversationsGetConversationPrefsschema>({
    ok: s.literal("True"),
    prefs: s.optional(s.lazy(() => prefs1Schema)),
  });
