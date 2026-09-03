import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usersSetPhotoErrorEnumSchema, type UsersSetPhotoErrorEnum } from "./users-set-photo-error-enum.js";

export type UsersSetPhotoerrorschema1 = {
  callstack?: string;
  debugStep?: string;
  dims?: string;
  error: UsersSetPhotoErrorEnum;
  ok: "False";
  timeIdent?: number;
};

export const usersSetPhotoerrorschema1Schema: Schema<UsersSetPhotoerrorschema1> =
  s.object<UsersSetPhotoerrorschema1>({
    callstack: s.optional(s.string()),
    debugStep: s.optional(s.string()),
    dims: s.optional(s.string()),
    error: usersSetPhotoErrorEnumSchema,
    ok: s.literal("False"),
    timeIdent: s.optional(s.number()),
    _keysMap: {
      debugStep: "debug_step",
      timeIdent: "time_ident",
    },
  });
