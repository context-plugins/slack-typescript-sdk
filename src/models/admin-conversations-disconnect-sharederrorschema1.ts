import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsDisconnectSharedErrorEnumSchema,
  type AdminConversationsDisconnectSharedErrorEnum,
} from "./admin-conversations-disconnect-shared-error-enum.js";

export type AdminConversationsDisconnectSharederrorschema1 = {
  error: AdminConversationsDisconnectSharedErrorEnum;
  ok: "False";
};

export const adminConversationsDisconnectSharederrorschema1Schema: Schema<AdminConversationsDisconnectSharederrorschema1> =
  s.object<AdminConversationsDisconnectSharederrorschema1>({
    error: adminConversationsDisconnectSharedErrorEnumSchema,
    ok: s.literal("False"),
  });
