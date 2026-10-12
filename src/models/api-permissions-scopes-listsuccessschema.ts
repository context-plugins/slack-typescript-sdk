import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesSchema, type Scopes } from "./scopes.js";

/** Schema for successful response api.permissions.scopes.list method */
export type ApiPermissionsScopesListsuccessschema = {
  ok: boolean;
  scopes: Scopes;
};

export const apiPermissionsScopesListsuccessschemaSchema: Schema<ApiPermissionsScopesListsuccessschema> =
  s.object<ApiPermissionsScopesListsuccessschema>({
    ok: s.boolean(),
    scopes: scopesSchema,
  });
