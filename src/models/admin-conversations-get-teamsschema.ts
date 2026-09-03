import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

export type AdminConversationsGetTeamsschema = {
  ok: "True";
  responseMetadata?: ResponseMetadata;
  teamIds: string[];
};

export const adminConversationsGetTeamsschemaSchema: Schema<AdminConversationsGetTeamsschema> =
  s.object<AdminConversationsGetTeamsschema>({
    ok: s.literal("True"),
    responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
    teamIds: s.array(s.string()),
    _keysMap: {
      responseMetadata: "response_metadata",
      teamIds: "team_ids",
    },
  });
