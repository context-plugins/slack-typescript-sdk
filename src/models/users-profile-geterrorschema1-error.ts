import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersProfileGetErrorEnumSchema,
  type UsersProfileGetErrorEnum,
} from "./users-profile-get-error-enum.js";

/** Schema for error response from users.profile.get method */
export type UsersProfileGeterrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersProfileGetErrorEnum;
  ok: boolean;
};

export const usersProfileGeterrorschema1ErrorSchema: Schema<UsersProfileGeterrorschema1Error> =
  s.object<UsersProfileGeterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersProfileGetErrorEnumSchema,
    ok: s.boolean(),
  });
