import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response files.comments.delete method */
export type FilesCommentsDeleteschema = {
  ok: boolean;
};

export const filesCommentsDeleteschemaSchema: Schema<FilesCommentsDeleteschema> =
  s.object<FilesCommentsDeleteschema>({
    ok: s.boolean(),
  });
