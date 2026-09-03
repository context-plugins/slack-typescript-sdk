import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesSchema, type Scopes } from "./scopes.js";

export type ApiPermissionsScopesListsuccessschema = {
  ok: "True";
  scopes: Scopes;
};

export const apiPermissionsScopesListsuccessschemaSchema: Schema<ApiPermissionsScopesListsuccessschema> =
  s.object<ApiPermissionsScopesListsuccessschema>({
    ok: s.literal("True"),
    scopes: scopesSchema,
  });
