import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileobjectInternalSchema, fileobjectSchema, type Fileobject } from "./fileobject.js";

/** Schema for successful response from files.revokePublicURL method */
export type FilesRevokePublicUrLschema = {
  file: Fileobject;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filesRevokePublicUrLschemaProperties: s.Shape<FilesRevokePublicUrLschema> = {
  file: fileobjectInternalSchema,
  ok: s.boolean(),
};

export const filesRevokePublicUrLschemaInternalSchema: Schema<FilesRevokePublicUrLschema> =
  s.object<FilesRevokePublicUrLschema>(filesRevokePublicUrLschemaProperties, {
    additionalProperties: s.json(),
  });

export const filesRevokePublicUrLschemaSchema: Schema<FilesRevokePublicUrLschema> = s.lazySchema(() =>
  s.object<FilesRevokePublicUrLschema>(
    {
      ...filesRevokePublicUrLschemaProperties,
      file: fileobjectSchema,
    },
    { additionalProperties: s.json() },
  ),
);
