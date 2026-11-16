import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  adminConversationsGetTeamsErrorEnumSchema,
  type AdminConversationsGetTeamsErrorEnum,
} from "./admin-conversations-get-teams-error-enum.js";

/** Schema for error response from admin.conversations.getTeams */
export type AdminConversationsGetTeamserrorschema1 = {
  error: AdminConversationsGetTeamsErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adminConversationsGetTeamserrorschema1Schema: Schema<AdminConversationsGetTeamserrorschema1> =
  s.object<AdminConversationsGetTeamserrorschema1>(
    {
      error: adminConversationsGetTeamsErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
