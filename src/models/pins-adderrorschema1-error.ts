import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsAddErrorEnumSchema, type PinsAddErrorEnum } from "./pins-add-error-enum.js";

export type PinsAdderrorschema1Error = {
  callstack?: string;
  error: PinsAddErrorEnum;
  ok: "False";
};

export const pinsAdderrorschema1ErrorSchema: Schema<PinsAdderrorschema1Error> =
  s.object<PinsAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: pinsAddErrorEnumSchema,
    ok: s.literal("False"),
  });
