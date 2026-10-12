import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesDeleteErrorEnumSchema, type FilesDeleteErrorEnum } from "./files-delete-error-enum.js";

/** Schema for error response files.delete method */
export type FilesDeleteerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesDeleteErrorEnum;
  ok: boolean;
};

export const filesDeleteerrorschema1ErrorSchema: Schema<FilesDeleteerrorschema1Error> =
  s.object<FilesDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesDeleteErrorEnumSchema,
    ok: s.boolean(),
  });
