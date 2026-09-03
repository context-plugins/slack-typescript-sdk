import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersLookupByEmailsuccessschema = {
  ok: "True";
  user: Record<string, unknown>;
};

export const usersLookupByEmailsuccessschemaSchema: Schema<UsersLookupByEmailsuccessschema> =
  s.object<UsersLookupByEmailsuccessschema>({
    ok: s.literal("True"),
    user: s.record(s.string(), s.unknown()),
  });
