import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesListErrorEnumSchema, type FilesListErrorEnum } from "./files-list-error-enum.js";

export type FilesListerrorschema1 = {
  callstack?: string;
  error: FilesListErrorEnum;
  ok: "False";
};

export const filesListerrorschema1Schema: Schema<FilesListerrorschema1> = s.object<FilesListerrorschema1>({
  callstack: s.optional(s.string()),
  error: filesListErrorEnumSchema,
  ok: s.literal("False"),
});
