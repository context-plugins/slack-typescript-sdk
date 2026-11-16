import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  filesRevokePublicUrlErrorEnumSchema,
  type FilesRevokePublicUrlErrorEnum,
} from "./files-revoke-public-url-error-enum.js";

/** Schema for error response from files.revokePublicURL method */
export type FilesRevokePublicUrLerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesRevokePublicUrlErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filesRevokePublicUrLerrorschema1ErrorSchema: Schema<FilesRevokePublicUrLerrorschema1Error> =
  s.object<FilesRevokePublicUrLerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: filesRevokePublicUrlErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
