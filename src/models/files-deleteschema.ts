import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response files.delete method */
export type FilesDeleteschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filesDeleteschemaSchema: Schema<FilesDeleteschema> = s.object<FilesDeleteschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
