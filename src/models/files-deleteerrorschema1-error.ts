import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesDeleteErrorEnumSchema, type FilesDeleteErrorEnum } from "./files-delete-error-enum.js";

export type FilesDeleteerrorschema1Error = {
  callstack?: string;
  error: FilesDeleteErrorEnum;
  ok: "False";
};

export const filesDeleteerrorschema1ErrorSchema: Schema<FilesDeleteerrorschema1Error> =
  s.object<FilesDeleteerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
