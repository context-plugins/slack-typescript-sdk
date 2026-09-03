import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

export type FilesInfoschema = {
  comments: Record<string, unknown>[];
  contentHtml?: string | null;
  editor?: string;
  file: Fileobject;
  ok: "True";
  paging?: Pagingobject;
  responseMetadata?: Record<string, unknown>;
};

export const filesInfoschemaSchema: Schema<FilesInfoschema> = s.object<FilesInfoschema>({
  comments: s.array(s.record(s.string(), s.unknown())),
  contentHtml: s.optionalNullable(s.string()),
  editor: s.optional(s.string()),
  file: fileobjectSchema,
  ok: s.literal("True"),
  paging: s.optional(s.lazy(() => pagingobjectSchema)),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    contentHtml: "content_html",
    responseMetadata: "response_metadata",
  },
});
