import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsAddErrorEnumSchema, type PinsAddErrorEnum } from "./pins-add-error-enum.js";

export type PinsAdderrorschema1 = {
  callstack?: string;
  error: PinsAddErrorEnum;
  ok: "False";
};

export const pinsAdderrorschema1Schema: Schema<PinsAdderrorschema1> = s.object<PinsAdderrorschema1>({
  callstack: s.optional(s.string()),
  error: pinsAddErrorEnumSchema,
  ok: s.literal("False"),
});
