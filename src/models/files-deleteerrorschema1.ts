import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filesDeleteErrorEnumSchema, type FilesDeleteErrorEnum } from "./files-delete-error-enum.js";

export type FilesDeleteerrorschema1 = {
  callstack?: string;
  error: FilesDeleteErrorEnum;
  ok: "False";
};

export const filesDeleteerrorschema1Schema: Schema<FilesDeleteerrorschema1> =
  s.object<FilesDeleteerrorschema1>({
    callstack: s.optional(s.string()),
    error: filesDeleteErrorEnumSchema,
    ok: s.literal("False"),
  });
