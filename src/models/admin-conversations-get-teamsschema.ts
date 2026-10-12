import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response of admin.conversations.getTeams */
export type AdminConversationsGetTeamsschema = {
  ok: boolean;
  responseMetadata?: ResponseMetadata;
  teamIds: string[];
};

export const adminConversationsGetTeamsschemaSchema: Schema<AdminConversationsGetTeamsschema> =
  s.object<AdminConversationsGetTeamsschema>({
    ok: s.boolean(),
    responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
    teamIds: s.array(s.string()),
    _keysMap: {
      responseMetadata: "response_metadata",
      teamIds: "team_ids",
    },
  });
