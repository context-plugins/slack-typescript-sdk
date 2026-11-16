import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileobjectInternalSchema, fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response files.upload method */
export type FilesUploadschema = {
  file: Fileobject;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filesUploadschemaProperties: s.Shape<FilesUploadschema> = {
  file: fileobjectInternalSchema,
  ok: s.boolean(),
};

export const filesUploadschemaInternalSchema: Schema<FilesUploadschema> = s.object<FilesUploadschema>(
  filesUploadschemaProperties,
  { additionalProperties: s.json() },
);

export const filesUploadschemaSchema: Schema<FilesUploadschema> = s.lazySchema(() =>
  s.object<FilesUploadschema>(
    {
      ...filesUploadschemaProperties,
      file: fileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
