import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsemetadata3Schema, type Responsemetadata3 } from "./responsemetadata3.js";

/** Schema for successful response from conversations.join method */
export type ConversationsJoinsuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
  responseMetadata?: Responsemetadata3;
  warning?: string;
};

export const conversationsJoinsuccessschemaSchema: Schema<ConversationsJoinsuccessschema> =
  s.object<ConversationsJoinsuccessschema>({
    channel: s.record(s.string(), s.unknown()),
    ok: s.boolean(),
    responseMetadata: s.optional(s.lazy(() => responsemetadata3Schema)),
    warning: s.optional(s.string()),
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  });
