import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagingobject = {
  count?: number;
  page: number;
  pages?: number;
  perPage?: number;
  spill?: number;
  total: number;
};

export const pagingobjectSchema: Schema<Pagingobject> = s.object<Pagingobject>({
  count: s.optional(s.int()),
  page: s.int(),
  pages: s.optional(s.int()),
  perPage: s.optional(s.int()),
  spill: s.optional(s.int()),
  total: s.int(),
  _keysMap: {
    perPage: "per_page",
  },
});
