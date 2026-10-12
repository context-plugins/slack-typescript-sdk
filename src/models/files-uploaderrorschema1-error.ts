import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesUploadErrorEnumSchema, type FilesUploadErrorEnum } from "./files-upload-error-enum.js";

/** Schema for error response files.upload method */
export type FilesUploaderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesUploadErrorEnum;
  ok: boolean;
};

export const filesUploaderrorschema1ErrorSchema: Schema<FilesUploaderrorschema1Error> =
  s.object<FilesUploaderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesUploadErrorEnumSchema,
    ok: s.boolean(),
  });
