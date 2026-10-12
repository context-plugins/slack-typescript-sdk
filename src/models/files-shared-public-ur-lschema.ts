import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response from files.sharedPublicURL method */
export type FilesSharedPublicUrLschema = {
  file: Fileobject;
  ok: boolean;
};

export const filesSharedPublicUrLschemaSchema: Schema<FilesSharedPublicUrLschema> =
  s.object<FilesSharedPublicUrLschema>({
    file: fileobjectSchema,
    ok: s.boolean(),
  });
