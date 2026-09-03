import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdminConversationsConvertToPrivateschema = {
  ok: "True";
};

export const adminConversationsConvertToPrivateschemaSchema: Schema<AdminConversationsConvertToPrivateschema> =
  s.object<AdminConversationsConvertToPrivateschema>({
    ok: s.literal("True"),
  });
