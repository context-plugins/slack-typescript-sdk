import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesSharedPublicUrlErrorEnumSchema,
  type FilesSharedPublicUrlErrorEnum,
} from "./files-shared-public-url-error-enum.js";

/** Schema for error response from files.sharedPublicURL method */
export type FilesSharedPublicUrLerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: FilesSharedPublicUrlErrorEnum;
  ok: boolean;
};

export const filesSharedPublicUrLerrorschema1ErrorSchema: Schema<FilesSharedPublicUrLerrorschema1Error> =
  s.object<FilesSharedPublicUrLerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesSharedPublicUrlErrorEnumSchema,
    ok: s.boolean(),
  });
