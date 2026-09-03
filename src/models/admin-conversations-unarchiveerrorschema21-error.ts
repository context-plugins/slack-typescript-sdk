import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsRenameErrorEnumSchema,
  type AdminConversationsRenameErrorEnum,
} from "./admin-conversations-rename-error-enum.js";

export type AdminConversationsUnarchiveerrorschema21Error = {
  error: AdminConversationsRenameErrorEnum;
  ok: "False";
};

export const adminConversationsUnarchiveerrorschema21ErrorSchema: Schema<AdminConversationsUnarchiveerrorschema21Error> =
  s.object<AdminConversationsUnarchiveerrorschema21Error>({
    error: adminConversationsRenameErrorEnumSchema,
    ok: s.literal("False"),
  });
