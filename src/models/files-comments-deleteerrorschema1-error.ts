import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesCommentsDeleteErrorEnumSchema,
  type FilesCommentsDeleteErrorEnum,
} from "./files-comments-delete-error-enum.js";

export type FilesCommentsDeleteerrorschema1Error = {
  callstack?: string;
  error: FilesCommentsDeleteErrorEnum;
  ok: "False";
};

export const filesCommentsDeleteerrorschema1ErrorSchema: Schema<FilesCommentsDeleteerrorschema1Error> =
  s.object<FilesCommentsDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesCommentsDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
