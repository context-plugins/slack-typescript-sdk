import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiTesterrorschema1 = {
  error: string;
  ok: "False";
};

export const apiTesterrorschema1Schema: Schema<ApiTesterrorschema1> = s.object<ApiTesterrorschema1>({
  error: s.string(),
  ok: s.literal("False"),
});
