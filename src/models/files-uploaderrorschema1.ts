import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filesUploadErrorEnumSchema, type FilesUploadErrorEnum } from "./files-upload-error-enum.js";

/** Schema for error response files.upload method */
export type FilesUploaderrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesUploadErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filesUploaderrorschema1Schema: Schema<FilesUploaderrorschema1> =
  s.object<FilesUploaderrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: filesUploadErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
