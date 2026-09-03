import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsRenameErrorEnumSchema,
  type AdminConversationsRenameErrorEnum,
} from "./admin-conversations-rename-error-enum.js";

export type AdminConversationsUnarchiveerrorschema21 = {
  error: AdminConversationsRenameErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema21Schema: Schema<AdminConversationsUnarchiveerrorschema21> =
  s.object<AdminConversationsUnarchiveerrorschema21>({
    error: adminConversationsRenameErrorEnumSchema,
    ok: s.literal("False"),
  });
