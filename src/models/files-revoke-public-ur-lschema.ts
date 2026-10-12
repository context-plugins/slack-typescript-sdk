import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response from files.revokePublicURL method */
export type FilesRevokePublicUrLschema = {
  file: Fileobject;
  ok: boolean;
};

export const filesRevokePublicUrLschemaSchema: Schema<FilesRevokePublicUrLschema> =
  s.object<FilesRevokePublicUrLschema>({
    file: fileobjectSchema,
    ok: s.boolean(),
  });
