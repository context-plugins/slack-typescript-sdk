import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsAddErrorEnumSchema, type ReactionsAddErrorEnum } from "./reactions-add-error-enum.js";

export type ReactionsAdderrorschema1Error = {
  callstack?: string;
  error: ReactionsAddErrorEnum;
  ok: "False";
};

export const reactionsAdderrorschema1ErrorSchema: Schema<ReactionsAdderrorschema1Error> =
  s.object<ReactionsAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsAddErrorEnumSchema,
    ok: s.literal("False"),
  });
