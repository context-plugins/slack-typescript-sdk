import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileobjectInternalSchema, fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response from files.sharedPublicURL method */
export type FilesSharedPublicUrLschema = {
  file: Fileobject;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filesSharedPublicUrLschemaProperties: s.Shape<FilesSharedPublicUrLschema> = {
  file: fileobjectInternalSchema,
  ok: s.boolean(),
};

export const filesSharedPublicUrLschemaInternalSchema: Schema<FilesSharedPublicUrLschema> =
  s.object<FilesSharedPublicUrLschema>(filesSharedPublicUrLschemaProperties, {
    additionalProperties: s.json(),
  });

export const filesSharedPublicUrLschemaSchema: Schema<FilesSharedPublicUrLschema> = s.lazySchema(() =>
  s.object<FilesSharedPublicUrLschema>(
    {
      ...filesSharedPublicUrLschemaProperties,
      file: fileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
