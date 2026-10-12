import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsAddErrorEnumSchema, type ReactionsAddErrorEnum } from "./reactions-add-error-enum.js";

/** Schema for error response from reactions.add method */
export type ReactionsAdderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsAddErrorEnum;
  ok: boolean;
};

export const reactionsAdderrorschema1ErrorSchema: Schema<ReactionsAdderrorschema1Error> =
  s.object<ReactionsAdderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsAddErrorEnumSchema,
    ok: s.boolean(),
  });
