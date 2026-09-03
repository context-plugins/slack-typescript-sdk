import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

export type StarsListschema = {
  items: Record<string, unknown>[];
  ok: "True";
  paging?: Pagingobject;
};

export const starsListschemaSchema: Schema<StarsListschema> = s.object<StarsListschema>({
  items: s.array(s.record(s.string(), s.unknown())),
  ok: s.literal("True"),
  paging: s.optional(s.lazy(() => pagingobjectSchema)),
});
