import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usersSetActiveErrorEnumSchema,
  type UsersSetActiveErrorEnum,
} from "./users-set-active-error-enum.js";

/** Schema for error response from users.setActive method */
export type UsersSetActiveerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: UsersSetActiveErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersSetActiveerrorschema1Schema: Schema<UsersSetActiveerrorschema1> =
  s.object<UsersSetActiveerrorschema1>(
    {
      callstack: s.optional(s.string()),
      error: usersSetActiveErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
