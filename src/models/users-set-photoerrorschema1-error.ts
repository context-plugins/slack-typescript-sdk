import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersSetPhotoErrorEnumSchema, type UsersSetPhotoErrorEnum } from "./users-set-photo-error-enum.js";

/** Schema for error response from users.setPhoto method */
export type UsersSetPhotoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  /** possibly DEV/QA only */
  debugStep?: string;
  /** possibly DEV/QA only */
  dims?: string;
  error: UsersSetPhotoErrorEnum;
  ok: boolean;
  /** possibly DEV/QA only */
  timeIdent?: number;
};

export const usersSetPhotoerrorschema1ErrorSchema: Schema<UsersSetPhotoerrorschema1Error> =
  s.object<UsersSetPhotoerrorschema1Error>({
    callstack: s.optional(s.string()),
    debugStep: s.optional(s.string()),
    dims: s.optional(s.string()),
    error: usersSetPhotoErrorEnumSchema,
    ok: s.boolean(),
    timeIdent: s.optional(s.int()),
    _keysMap: {
      debugStep: "debug_step",
      timeIdent: "time_ident",
    },
  });
