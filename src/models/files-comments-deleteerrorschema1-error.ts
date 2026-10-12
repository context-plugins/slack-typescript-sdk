import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesCommentsDeleteErrorEnumSchema,
  type FilesCommentsDeleteErrorEnum,
} from "./files-comments-delete-error-enum.js";

/** Schema for error response files.comments.delete method */
export type FilesCommentsDeleteerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesCommentsDeleteErrorEnum;
  ok: boolean;
};

export const filesCommentsDeleteerrorschema1ErrorSchema: Schema<FilesCommentsDeleteerrorschema1Error> =
  s.object<FilesCommentsDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesCommentsDeleteErrorEnumSchema,
    ok: s.boolean(),
  });
