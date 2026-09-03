import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsCreateErrorEnumSchema,
  type AdminConversationsCreateErrorEnum,
} from "./admin-conversations-create-error-enum.js";

export type AdminConversationsCreateerrorschema1Error = {
  error: AdminConversationsCreateErrorEnum;
  ok: "False";
};

export const adminConversationsCreateerrorschema1ErrorSchema: Schema<AdminConversationsCreateerrorschema1Error> =
  s.object<AdminConversationsCreateerrorschema1Error>({
    error: adminConversationsCreateErrorEnumSchema,
    ok: s.literal("False"),
  });
