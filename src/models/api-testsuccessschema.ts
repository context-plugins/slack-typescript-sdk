import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response api.test method */
export type ApiTestsuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const apiTestsuccessschemaSchema: Schema<ApiTestsuccessschema> = s.object<ApiTestsuccessschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.unknown() },
);
