import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { starsAddErrorEnumSchema, type StarsAddErrorEnum } from "./stars-add-error-enum.js";

export type StarsAdderrorschema1 = {
  callstack?: string;
  error: StarsAddErrorEnum;
  ok: "False";
};

export const starsAdderrorschema1Schema: Schema<StarsAdderrorschema1> = s.object<StarsAdderrorschema1>({
  callstack: s.optional(s.string()),
  error: starsAddErrorEnumSchema,
  ok: s.literal("False"),
});
