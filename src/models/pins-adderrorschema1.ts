import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsAddErrorEnumSchema, type PinsAddErrorEnum } from "./pins-add-error-enum.js";

/** Schema for error response from pins.add method */
export type PinsAdderrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: PinsAddErrorEnum;
  ok: boolean;
};

export const pinsAdderrorschema1Schema: Schema<PinsAdderrorschema1> = s.object<PinsAdderrorschema1>({
  callstack: s.optional(s.string()),
  error: pinsAddErrorEnumSchema,
  ok: s.boolean(),
});
