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
  count: s.optional(s.number()),
  page: s.number(),
  pages: s.optional(s.number()),
  perPage: s.optional(s.number()),
  spill: s.optional(s.number()),
  total: s.number(),
  _keysMap: {
    perPage: "per_page",
  },
});
