import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { starsAddErrorEnumSchema, type StarsAddErrorEnum } from "./stars-add-error-enum.js";

export type StarsAdderrorschema1Error = {
  callstack?: string;
  error: StarsAddErrorEnum;
  ok: "False";
};

export const starsAdderrorschema1ErrorSchema: Schema<StarsAdderrorschema1Error> =
  s.object<StarsAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: starsAddErrorEnumSchema,
    ok: s.literal("False"),
  });
