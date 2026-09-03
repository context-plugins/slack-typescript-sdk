import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsAddErrorEnumSchema, type ReactionsAddErrorEnum } from "./reactions-add-error-enum.js";

export type ReactionsAdderrorschema1 = {
  callstack?: string;
  error: ReactionsAddErrorEnum;
  ok: "False";
};

export const reactionsAdderrorschema1Schema: Schema<ReactionsAdderrorschema1> =
  s.object<ReactionsAdderrorschema1>({
    callstack: s.optional(s.string()),
    error: reactionsAddErrorEnumSchema,
    ok: s.literal("False"),
  });
