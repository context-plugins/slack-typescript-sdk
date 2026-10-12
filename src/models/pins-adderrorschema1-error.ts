import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsAddErrorEnumSchema, type PinsAddErrorEnum } from "./pins-add-error-enum.js";

/** Schema for error response from pins.add method */
export type PinsAdderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: PinsAddErrorEnum;
  ok: boolean;
};

export const pinsAdderrorschema1ErrorSchema: Schema<PinsAdderrorschema1Error> =
  s.object<PinsAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: pinsAddErrorEnumSchema,
    ok: s.boolean(),
  });
