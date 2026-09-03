import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";

export type FilesRevokePublicUrLschema = {
  file: Fileobject;
  ok: "True";
};

export const filesRevokePublicUrLschemaSchema: Schema<FilesRevokePublicUrLschema> =
  s.object<FilesRevokePublicUrLschema>({
    file: fileobjectSchema,
    ok: s.literal("True"),
  });
