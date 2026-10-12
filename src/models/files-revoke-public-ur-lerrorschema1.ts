import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesRevokePublicUrlErrorEnumSchema,
  type FilesRevokePublicUrlErrorEnum,
} from "./files-revoke-public-url-error-enum.js";

/** Schema for error response from files.revokePublicURL method */
export type FilesRevokePublicUrLerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesRevokePublicUrlErrorEnum;
  ok: boolean;
};

export const filesRevokePublicUrLerrorschema1Schema: Schema<FilesRevokePublicUrLerrorschema1> =
  s.object<FilesRevokePublicUrLerrorschema1>({
    callstack: s.optional(s.string()),
    error: filesRevokePublicUrlErrorEnumSchema,
    ok: s.boolean(),
  });
