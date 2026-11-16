import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileobjectInternalSchema, fileobjectSchema, type Fileobject } from "./fileobject.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from files.list method */
export type FilesListschema = {
  files: Fileobject[];
  ok: boolean;
  paging: Pagingobject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filesListschemaProperties: s.Shape<FilesListschema> = {
  files: s.array(s.lazy(() => fileobjectInternalSchema)),
  ok: s.boolean(),
  paging: pagingobjectSchema,
};

export const filesListschemaInternalSchema: Schema<FilesListschema> = s.object<FilesListschema>(
  filesListschemaProperties,
  { additionalProperties: s.json() },
);

export const filesListschemaSchema: Schema<FilesListschema> = s.lazySchema(() =>
  s.object<FilesListschema>(
    {
      ...filesListschemaProperties,
      files: s.array(s.lazy(() => fileobjectSchema)).check(s.minLength(0), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
