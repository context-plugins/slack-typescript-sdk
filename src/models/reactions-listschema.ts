import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from reactions.list method */
export type ReactionsListschema = {
  items: Record<string, unknown>[];
  ok: boolean;
  paging?: Pagingobject;
  responseMetadata?: Record<string, unknown>;
};

export const reactionsListschemaSchema: Schema<ReactionsListschema> = s.object<ReactionsListschema>({
  items: s.array(s.record(s.string(), s.unknown())),
  ok: s.boolean(),
  paging: s.optional(s.lazy(() => pagingobjectSchema)),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    responseMetadata: "response_metadata",
  },
});
