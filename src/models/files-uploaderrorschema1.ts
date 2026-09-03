import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesUploadErrorEnumSchema, type FilesUploadErrorEnum } from "./files-upload-error-enum.js";

export type FilesUploaderrorschema1 = {
  callstack?: string;
  error: FilesUploadErrorEnum;
  ok: "False";
};

export const filesUploaderrorschema1Schema: Schema<FilesUploaderrorschema1> =
  s.object<FilesUploaderrorschema1>({
    callstack: s.optional(s.string()),
    error: filesUploadErrorEnumSchema,
    ok: s.literal("False"),
  });
