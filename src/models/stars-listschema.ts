import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from stars.list method */
export type StarsListschema = {
  items: Record<string, unknown>[];
  ok: boolean;
  paging?: Pagingobject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const starsListschemaSchema: Schema<StarsListschema> = s.object<StarsListschema>(
  {
    items: s.array(s.record(s.string(), s.unknown())),
    ok: s.boolean(),
    paging: s.optional(s.lazy(() => pagingobjectSchema)),
  },
  { additionalProperties: s.json() },
);
