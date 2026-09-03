import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiTesterrorschema1Error = {
  error: string;
  ok: "False";
};

export const apiTesterrorschema1ErrorSchema: Schema<ApiTesterrorschema1Error> =
  s.object<ApiTesterrorschema1Error>({
    error: s.string(),
    ok: s.literal("False"),
  });
