import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesListErrorEnumSchema, type FilesListErrorEnum } from "./files-list-error-enum.js";

/** Schema for error response from files.list method */
export type FilesListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesListErrorEnum;
  ok: boolean;
};

export const filesListerrorschema1Schema: Schema<FilesListerrorschema1> = s.object<FilesListerrorschema1>({
  callstack: s.optional(s.string()),
  error: filesListErrorEnumSchema,
  ok: s.boolean(),
});
