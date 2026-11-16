import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/** Schema for successful response from conversations.list method */
export type ConversationsListsuccessschema = {
  channels: Record<string, unknown>[];
  ok: boolean;
  responseMetadata?: ResponseMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationsListsuccessschemaProperties: s.Shape<ConversationsListsuccessschema> = {
  channels: s.array(s.record(s.string(), s.unknown())),
  ok: s.boolean(),
  responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
  _keysMap: {
    responseMetadata: "response_metadata",
  },
};

export const conversationsListsuccessschemaInternalSchema: Schema<ConversationsListsuccessschema> =
  s.object<ConversationsListsuccessschema>(conversationsListsuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const conversationsListsuccessschemaSchema: Schema<ConversationsListsuccessschema> = s.lazySchema(() =>
  s.object<ConversationsListsuccessschema>(
    {
      ...conversationsListsuccessschemaProperties,
      channels: s.array(s.record(s.string(), s.unknown())).check(s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
