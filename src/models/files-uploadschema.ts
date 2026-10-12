import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response files.upload method */
export type FilesUploadschema = {
  file: Fileobject;
  ok: boolean;
};

export const filesUploadschemaSchema: Schema<FilesUploadschema> = s.object<FilesUploadschema>({
  file: fileobjectSchema,
  ok: s.boolean(),
});
