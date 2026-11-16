import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from reactions.list method */
export type ReactionsListschema = {
  items: Record<string, unknown>[];
  ok: boolean;
  paging?: Pagingobject;
  responseMetadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactionsListschemaSchema: Schema<ReactionsListschema> = s.object<ReactionsListschema>(
  {
    items: s.array(s.record(s.string(), s.unknown())),
    ok: s.boolean(),
    paging: s.optional(s.lazy(() => pagingobjectSchema)),
    responseMetadata: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      responseMetadata: "response_metadata",
    },
  },
  { additionalProperties: s.json() },
);
