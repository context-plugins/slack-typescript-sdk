import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

/**
 * Schema for successful response from users.conversations method. Returned conversation objects do
 * not include `num_members` or `is_member`
 */
export type UsersConversationssuccessschema = {
  channels: Record<string, unknown>[];
  ok: boolean;
  responseMetadata?: ResponseMetadata;
};

export const usersConversationssuccessschemaSchema: Schema<UsersConversationssuccessschema> =
  s.object<UsersConversationssuccessschema>({
    channels: s.array(s.record(s.string(), s.unknown())),
    ok: s.boolean(),
    responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
