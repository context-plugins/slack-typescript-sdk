import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetTeamsErrorEnumSchema,
  type AdminConversationsGetTeamsErrorEnum,
} from "./admin-conversations-get-teams-error-enum.js";

export type AdminConversationsGetTeamserrorschema1 = {
  error: AdminConversationsGetTeamsErrorEnum;
  ok: "False";
};

export const adminConversationsGetTeamserrorschema1Schema: Schema<AdminConversationsGetTeamserrorschema1> =
  s.object<AdminConversationsGetTeamserrorschema1>({
    error: adminConversationsGetTeamsErrorEnumSchema,
    ok: s.literal("False"),
  });
