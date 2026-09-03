import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

export type FilesSharedPublicUrLschema = {
  file: Fileobject;
  ok: "True";
};

export const filesSharedPublicUrLschemaSchema: Schema<FilesSharedPublicUrLschema> =
  s.object<FilesSharedPublicUrLschema>({
    file: fileobjectSchema,
    ok: s.literal("True"),
  });
