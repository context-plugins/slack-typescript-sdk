import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesInfoErrorEnumSchema, type FilesInfoErrorEnum } from "./files-info-error-enum.js";

/** Schema for error response from files.info method */
export type FilesInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesInfoErrorEnum;
  ok: boolean;
};

export const filesInfoerrorschema1Schema: Schema<FilesInfoerrorschema1> = s.object<FilesInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: filesInfoErrorEnumSchema,
  ok: s.boolean(),
});
