import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesInfoErrorEnumSchema, type FilesInfoErrorEnum } from "./files-info-error-enum.js";

export type FilesInfoerrorschema1Error = {
  callstack?: string;
  error: FilesInfoErrorEnum;
  ok: "False";
};

export const filesInfoerrorschema1ErrorSchema: Schema<FilesInfoerrorschema1Error> =
  s.object<FilesInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
