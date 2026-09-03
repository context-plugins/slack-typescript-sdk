import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { starsRemoveErrorEnumSchema, type StarsRemoveErrorEnum } from "./stars-remove-error-enum.js";

export type StarsRemoveerrorschema1Error = {
  callstack?: string;
  error: StarsRemoveErrorEnum;
  ok: "False";
};

export const starsRemoveerrorschema1ErrorSchema: Schema<StarsRemoveerrorschema1Error> =
  s.object<StarsRemoveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: starsRemoveErrorEnumSchema,
    ok: s.literal("False"),
  });
