import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  filesSharedPublicUrlErrorEnumSchema,
  type FilesSharedPublicUrlErrorEnum,
} from "./files-shared-public-url-error-enum.js";

export type FilesSharedPublicUrLerrorschema1Error = {
  callstack?: string;
  error: FilesSharedPublicUrlErrorEnum;
  ok: "False";
};

export const filesSharedPublicUrLerrorschema1ErrorSchema: Schema<FilesSharedPublicUrLerrorschema1Error> =
  s.object<FilesSharedPublicUrLerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: filesSharedPublicUrlErrorEnumSchema,
    ok: s.literal("False"),
  });
