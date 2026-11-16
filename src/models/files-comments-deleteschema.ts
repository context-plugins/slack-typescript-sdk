import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response files.comments.delete method */
export type FilesCommentsDeleteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filesCommentsDeleteschemaSchema: Schema<FilesCommentsDeleteschema> =
  s.object<FilesCommentsDeleteschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
