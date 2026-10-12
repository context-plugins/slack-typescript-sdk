import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

/** Schema for successful response from files.list method */
export type FilesListschema = {
  files: Fileobject[];
  ok: boolean;
  paging: Pagingobject;
};

export const filesListschemaSchema: Schema<FilesListschema> = s.object<FilesListschema>({
  files: s.array(s.lazy(() => fileobjectSchema)),
  ok: s.boolean(),
  paging: pagingobjectSchema,
});
