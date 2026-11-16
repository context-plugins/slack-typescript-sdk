import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response conversations.members method */
export type ConversationsMemberssuccessschema = {
  members: string[];
  ok: boolean;
  responseMetadata: ResponseMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationsMemberssuccessschemaProperties: s.Shape<ConversationsMemberssuccessschema> = {
  members: s.array(s.string()),
  ok: s.boolean(),
  responseMetadata: responseMetadataSchema,
  _keysMap: {
    responseMetadata: "response_metadata",
  },
};

export const conversationsMemberssuccessschemaInternalSchema: Schema<ConversationsMemberssuccessschema> =
  s.object<ConversationsMemberssuccessschema>(conversationsMemberssuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const conversationsMemberssuccessschemaSchema: Schema<ConversationsMemberssuccessschema> =
  s.lazySchema(() =>
    s.object<ConversationsMemberssuccessschema>(
      {
        ...conversationsMemberssuccessschemaProperties,
        members: s
          .array(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")))
          .check(s.minLength(1), s.uniqueItems()),
      },
      { additionalProperties: s.json() },
    ),
  );
