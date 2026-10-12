import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botsInfoErrorEnumSchema, type BotsInfoErrorEnum } from "./bots-info-error-enum.js";

/** Schema for error response from bots.info method */
export type BotsInfoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: BotsInfoErrorEnum;
  ok: boolean;
};

export const botsInfoerrorschema1ErrorSchema: Schema<BotsInfoerrorschema1Error> =
  s.object<BotsInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: botsInfoErrorEnumSchema,
    ok: s.boolean(),
  });
