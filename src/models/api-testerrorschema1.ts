import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for error response api.test method */
export type ApiTesterrorschema1 = {
  error: string;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const apiTesterrorschema1Schema: Schema<ApiTesterrorschema1> = s.object<ApiTesterrorschema1>(
  {
    error: s.string(),
    ok: s.boolean(),
  },
  { additionalProperties: s.unknown() },
);
