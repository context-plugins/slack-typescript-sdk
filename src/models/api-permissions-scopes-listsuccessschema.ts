import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopesSchema, type Scopes } from "./scopes.js";

/** Schema for successful response api.permissions.scopes.list method */
export type ApiPermissionsScopesListsuccessschema = {
  ok: boolean;
  scopes: Scopes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiPermissionsScopesListsuccessschemaSchema: Schema<ApiPermissionsScopesListsuccessschema> =
  s.object<ApiPermissionsScopesListsuccessschema>(
    {
      ok: s.boolean(),
      scopes: scopesSchema,
    },
    { additionalProperties: s.json() },
  );
