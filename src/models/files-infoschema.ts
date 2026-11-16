import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileobjectInternalSchema, fileobjectSchema, type Fileobject } from "./fileobject.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from files.info method */
export type FilesInfoschema = {
  comments: Record<string, unknown>[];
  contentHtml?: string | null;
  editor?: string;
  file: Fileobject;
  ok: boolean;
  paging?: Pagingobject;
  responseMetadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filesInfoschemaProperties: s.Shape<FilesInfoschema> = {
  comments: s.array(s.record(s.string(), s.unknown())),
  contentHtml: s.optionalNullable(s.string()),
  editor: s.optional(s.string()),
  file: fileobjectInternalSchema,
  ok: s.boolean(),
  paging: s.optional(s.lazy(() => pagingobjectSchema)),
  responseMetadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    contentHtml: "content_html",
    responseMetadata: "response_metadata",
  },
};

export const filesInfoschemaInternalSchema: Schema<FilesInfoschema> = s.object<FilesInfoschema>(
  filesInfoschemaProperties,
  { additionalProperties: s.json() },
);

export const filesInfoschemaSchema: Schema<FilesInfoschema> = s.lazySchema(() =>
  s.object<FilesInfoschema>(
    {
      ...filesInfoschemaProperties,
      editor: s.optional(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$"))),
      file: fileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
