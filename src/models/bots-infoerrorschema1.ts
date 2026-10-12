import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botsInfoErrorEnumSchema, type BotsInfoErrorEnum } from "./bots-info-error-enum.js";

/** Schema for error response from bots.info method */
export type BotsInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: BotsInfoErrorEnum;
  ok: boolean;
};

export const botsInfoerrorschema1Schema: Schema<BotsInfoerrorschema1> = s.object<BotsInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: botsInfoErrorEnumSchema,
  ok: s.boolean(),
});
