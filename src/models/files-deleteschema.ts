import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilesDeleteschema = {
  ok: "True";
};

export const filesDeleteschemaSchema: Schema<FilesDeleteschema> = s.object<FilesDeleteschema>({
  ok: s.literal("True"),
});
