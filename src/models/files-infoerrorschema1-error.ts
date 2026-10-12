import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesInfoErrorEnumSchema, type FilesInfoErrorEnum } from "./files-info-error-enum.js";

/** Schema for error response from files.info method */
export type FilesInfoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesInfoErrorEnum;
  ok: boolean;
};

export const filesInfoerrorschema1ErrorSchema: Schema<FilesInfoerrorschema1Error> =
  s.object<FilesInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesInfoErrorEnumSchema,
    ok: s.boolean(),
  });
