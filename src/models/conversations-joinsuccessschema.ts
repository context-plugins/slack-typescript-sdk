import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responsemetadata3InternalSchema,
  responsemetadata3Schema,
  type Responsemetadata3,
} from "./responsemetadata3.js";

/** Schema for successful response from conversations.join method */
export type ConversationsJoinsuccessschema = {
  channel: Record<string, unknown>;
  ok: boolean;
  responseMetadata?: Responsemetadata3;
  warning?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationsJoinsuccessschemaProperties: s.Shape<ConversationsJoinsuccessschema> = {
  channel: s.record(s.string(), s.unknown()),
  ok: s.boolean(),
  responseMetadata: s.optional(s.lazy(() => responsemetadata3InternalSchema)),
  warning: s.optional(s.string()),
  _keysMap: {
    responseMetadata: "response_metadata",
  },
};

export const conversationsJoinsuccessschemaInternalSchema: Schema<ConversationsJoinsuccessschema> =
  s.object<ConversationsJoinsuccessschema>(conversationsJoinsuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const conversationsJoinsuccessschemaSchema: Schema<ConversationsJoinsuccessschema> = s.lazySchema(() =>
  s.object<ConversationsJoinsuccessschema>(
    {
      ...conversationsJoinsuccessschemaProperties,
      responseMetadata: s.optional(s.lazy(() => responsemetadata3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
