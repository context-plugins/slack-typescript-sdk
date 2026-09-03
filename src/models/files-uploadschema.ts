import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

export type FilesUploadschema = {
  file: Fileobject;
  ok: "True";
};

export const filesUploadschemaSchema: Schema<FilesUploadschema> = s.object<FilesUploadschema>({
  file: fileobjectSchema,
  ok: s.literal("True"),
});
