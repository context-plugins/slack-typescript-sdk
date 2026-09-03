import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesInfoErrorEnumSchema, type FilesInfoErrorEnum } from "./files-info-error-enum.js";

export type FilesInfoerrorschema1 = {
  callstack?: string;
  error: FilesInfoErrorEnum;
  ok: "False";
};

export const filesInfoerrorschema1Schema: Schema<FilesInfoerrorschema1> = s.object<FilesInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: filesInfoErrorEnumSchema,
  ok: s.literal("False"),
});
