import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersProfileGeterrorschema1ErrorSchema: Schema<UsersProfileGeterrorschema1Error> =
  s.object<UsersProfileGeterrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: usersProfileGetErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
