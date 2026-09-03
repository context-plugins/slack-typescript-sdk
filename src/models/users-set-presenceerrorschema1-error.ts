import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  usersSetPresenceErrorEnumSchema,
  type UsersSetPresenceErrorEnum,
} from "./users-set-presence-error-enum.js";

export type UsersSetPresenceerrorschema1Error = {
  callstack?: string;
  error: UsersSetPresenceErrorEnum;
  ok: "False";
};

export const usersSetPresenceerrorschema1ErrorSchema: Schema<UsersSetPresenceerrorschema1Error> =
  s.object<UsersSetPresenceerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: usersSetPresenceErrorEnumSchema,
    ok: s.literal("False"),
  });
