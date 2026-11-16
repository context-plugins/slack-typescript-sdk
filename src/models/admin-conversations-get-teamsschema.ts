import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response of admin.conversations.getTeams */
export type AdminConversationsGetTeamsschema = {
  ok: boolean;
  responseMetadata?: ResponseMetadata;
  teamIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adminConversationsGetTeamsschemaProperties: s.Shape<AdminConversationsGetTeamsschema> = {
  ok: s.boolean(),
  responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
  teamIds: s.array(s.string()),
  _keysMap: {
    responseMetadata: "response_metadata",
    teamIds: "team_ids",
  },
};

export const adminConversationsGetTeamsschemaInternalSchema: Schema<AdminConversationsGetTeamsschema> =
  s.object<AdminConversationsGetTeamsschema>(adminConversationsGetTeamsschemaProperties, {
    additionalProperties: s.json(),
  });

export const adminConversationsGetTeamsschemaSchema: Schema<AdminConversationsGetTeamsschema> = s.lazySchema(
  () =>
    s.object<AdminConversationsGetTeamsschema>(
      {
        ...adminConversationsGetTeamsschemaProperties,
        teamIds: s.array(s.string().check(s.pattern("^[T][A-Z0-9]{2,}$"))),
      },
      { additionalProperties: s.json() },
    ),
);
