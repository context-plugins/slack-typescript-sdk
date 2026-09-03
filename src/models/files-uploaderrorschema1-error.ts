import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesUploadErrorEnumSchema, type FilesUploadErrorEnum } from "./files-upload-error-enum.js";

export type FilesUploaderrorschema1Error = {
  callstack?: string;
  error: FilesUploadErrorEnum;
  ok: "False";
};

export const filesUploaderrorschema1ErrorSchema: Schema<FilesUploaderrorschema1Error> =
  s.object<FilesUploaderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesUploadErrorEnumSchema,
    ok: s.literal("False"),
  });
