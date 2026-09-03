import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMetadataSchema, type ResponseMetadata } from "./response-metadata.js";

export type UsersConversationssuccessschema = {
  channels: Record<string, unknown>[];
  ok: "True";
  responseMetadata?: ResponseMetadata;
};

export const usersConversationssuccessschemaSchema: Schema<UsersConversationssuccessschema> =
  s.object<UsersConversationssuccessschema>({
    channels: s.array(s.record(s.string(), s.unknown())),
    ok: s.literal("True"),
    responseMetadata: s.optional(s.lazy(() => responseMetadataSchema)),
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
