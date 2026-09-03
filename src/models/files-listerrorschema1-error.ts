import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesListErrorEnumSchema, type FilesListErrorEnum } from "./files-list-error-enum.js";

export type FilesListerrorschema1Error = {
  callstack?: string;
  error: FilesListErrorEnum;
  ok: "False";
};

export const filesListerrorschema1ErrorSchema: Schema<FilesListerrorschema1Error> =
  s.object<FilesListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesListErrorEnumSchema,
    ok: s.literal("False"),
  });
