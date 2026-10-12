import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response api.test method */
export type ApiTestsuccessschema = {
  ok: boolean;
};

export const apiTestsuccessschemaSchema: Schema<ApiTestsuccessschema> = s.object<ApiTestsuccessschema>({
  ok: s.boolean(),
});
