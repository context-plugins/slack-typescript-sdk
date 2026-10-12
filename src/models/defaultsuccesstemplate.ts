import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * This method either only returns a brief _OK_ response or a verbose schema is not available for
 * this method.
 */
export type Defaultsuccesstemplate = {
  ok: boolean;
};

export const defaultsuccesstemplateSchema: Schema<Defaultsuccesstemplate> = s.object<Defaultsuccesstemplate>({
  ok: s.boolean(),
});
