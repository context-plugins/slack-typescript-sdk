import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiTestsuccessschema = {
  ok: "True";
};

export const apiTestsuccessschemaSchema: Schema<ApiTestsuccessschema> = s.object<ApiTestsuccessschema>({
  ok: s.literal("True"),
});
