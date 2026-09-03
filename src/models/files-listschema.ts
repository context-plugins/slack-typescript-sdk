import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";
import { pagingobjectSchema, type Pagingobject } from "./pagingobject.js";

export type FilesListschema = {
  files: Fileobject[];
  ok: "True";
  paging: Pagingobject;
};

export const filesListschemaSchema: Schema<FilesListschema> = s.object<FilesListschema>({
  files: s.array(s.lazy(() => fileobjectSchema)),
  ok: s.literal("True"),
  paging: pagingobjectSchema,
});
