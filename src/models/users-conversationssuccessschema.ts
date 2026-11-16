import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/**
 * Schema for successful response from users.conversations method. Returned conversation objects do
 * not include `num_members` or `is_member`
 */
export type UsersConversationssuccessschema = {
  channels: Record<string, unknown>[];
  ok: boolean;
  responseMetadata?: ResponseMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const usersConversationssuccessschemaProperties: s.Shape<UsersConversationssuccessschema> = {
  channels: s.array(s.record(s.string(), s.unknown())),
  ok: s.boolean(),
  responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
  _keysMap: {
    responseMetadata: "response_metadata",
  },
};

export const usersConversationssuccessschemaInternalSchema: Schema<UsersConversationssuccessschema> =
  s.object<UsersConversationssuccessschema>(usersConversationssuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const usersConversationssuccessschemaSchema: Schema<UsersConversationssuccessschema> = s.lazySchema(
  () =>
    s.object<UsersConversationssuccessschema>(
      {
        ...usersConversationssuccessschemaProperties,
        channels: s.array(s.record(s.string(), s.unknown())).check(s.uniqueItems()),
      },
      { additionalProperties: s.json() },
    ),
);
