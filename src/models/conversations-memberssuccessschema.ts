import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response conversations.members method */
export type ConversationsMemberssuccessschema = {
  members: string[];
  ok: boolean;
  responseMetadata: ResponseMetadata;
};

export const conversationsMemberssuccessschemaSchema: Schema<ConversationsMemberssuccessschema> =
  s.object<ConversationsMemberssuccessschema>({
    members: s.array(s.string()),
    ok: s.boolean(),
    responseMetadata: responseMetadataSchema,
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
