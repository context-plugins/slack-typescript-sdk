import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilesCommentsDeleteschema = {
  ok: "True";
};

export const filesCommentsDeleteschemaSchema: Schema<FilesCommentsDeleteschema> =
  s.object<FilesCommentsDeleteschema>({
    ok: s.literal("True"),
  });
