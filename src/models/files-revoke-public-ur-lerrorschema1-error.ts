import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesRevokePublicUrlErrorEnumSchema,
  type FilesRevokePublicUrlErrorEnum,
} from "./files-revoke-public-url-error-enum.js";

export type FilesRevokePublicUrLerrorschema1Error = {
  callstack?: string;
  error: FilesRevokePublicUrlErrorEnum;
  ok: "False";
};

export const filesRevokePublicUrLerrorschema1ErrorSchema: Schema<FilesRevokePublicUrLerrorschema1Error> =
  s.object<FilesRevokePublicUrLerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesRevokePublicUrlErrorEnumSchema,
    ok: s.literal("False"),
  });
