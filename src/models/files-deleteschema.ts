import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response files.delete method */
export type FilesDeleteschema = {
  ok: boolean;
};

export const filesDeleteschemaSchema: Schema<FilesDeleteschema> = s.object<FilesDeleteschema>({
  ok: s.boolean(),
});
