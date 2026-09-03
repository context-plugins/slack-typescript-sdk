import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

export type ConversationsMemberssuccessschema = {
  members: string[];
  ok: "True";
  responseMetadata: ResponseMetadata;
};

export const conversationsMemberssuccessschemaSchema: Schema<ConversationsMemberssuccessschema> =
  s.object<ConversationsMemberssuccessschema>({
    members: s.array(s.string()),
    ok: s.literal("True"),
    responseMetadata: responseMetadataSchema,
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
