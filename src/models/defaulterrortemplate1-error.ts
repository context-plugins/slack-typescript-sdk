import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * This method either only returns a brief _not OK_ response or a verbose schema is not available
 * for this method.
 */
export type Defaulterrortemplate1Error = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaulterrortemplate1ErrorSchema: Schema<Defaulterrortemplate1Error> =
  s.object<Defaulterrortemplate1Error>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
