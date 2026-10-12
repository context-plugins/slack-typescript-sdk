import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { starsAddErrorEnumSchema, type StarsAddErrorEnum } from "./stars-add-error-enum.js";

/** Schema for error response from stars.add method */
export type StarsAdderrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: StarsAddErrorEnum;
  ok: boolean;
};

export const starsAdderrorschema1Schema: Schema<StarsAdderrorschema1> = s.object<StarsAdderrorschema1>({
  callstack: s.optional(s.string()),
  error: starsAddErrorEnumSchema,
  ok: s.boolean(),
});
