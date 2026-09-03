import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesRevokePublicUrlErrorEnumSchema,
  type FilesRevokePublicUrlErrorEnum,
} from "./files-revoke-public-url-error-enum.js";

export type FilesRevokePublicUrLerrorschema1 = {
  callstack?: string;
  error: FilesRevokePublicUrlErrorEnum;
  ok: "False";
};

export const filesRevokePublicUrLerrorschema1Schema: Schema<FilesRevokePublicUrLerrorschema1> =
  s.object<FilesRevokePublicUrLerrorschema1>({
    callstack: s.optional(s.string()),
    error: filesRevokePublicUrlErrorEnumSchema,
    ok: s.literal("False"),
  });
