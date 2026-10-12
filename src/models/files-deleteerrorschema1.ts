import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesDeleteErrorEnumSchema, type FilesDeleteErrorEnum } from "./files-delete-error-enum.js";

/** Schema for error response files.delete method */
export type FilesDeleteerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesDeleteErrorEnum;
  ok: boolean;
};

export const filesDeleteerrorschema1Schema: Schema<FilesDeleteerrorschema1> =
  s.object<FilesDeleteerrorschema1>({
    callstack: s.optional(s.string()),
    error: filesDeleteErrorEnumSchema,
    ok: s.boolean(),
  });
