import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botsInfoErrorEnumSchema, type BotsInfoErrorEnum } from "./bots-info-error-enum.js";

export type BotsInfoerrorschema1 = {
  callstack?: string;
  error: BotsInfoErrorEnum;
  ok: "False";
};

export const botsInfoerrorschema1Schema: Schema<BotsInfoerrorschema1> = s.object<BotsInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: botsInfoErrorEnumSchema,
  ok: s.literal("False"),
});
