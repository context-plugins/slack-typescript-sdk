import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsDeleteErrorEnumSchema,
  type AdminConversationsDeleteErrorEnum,
} from "./admin-conversations-delete-error-enum.js";

export type AdminConversationsDeleteerrorschema1Error = {
  error: AdminConversationsDeleteErrorEnum;
  ok: "False";
};

export const adminConversationsDeleteerrorschema1ErrorSchema: Schema<AdminConversationsDeleteerrorschema1Error> =
  s.object<AdminConversationsDeleteerrorschema1Error>({
    error: adminConversationsDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
