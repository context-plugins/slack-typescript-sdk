import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  reactionsRemoveErrorEnumSchema,
  type ReactionsRemoveErrorEnum,
} from "./reactions-remove-error-enum.js";

/** Schema for error response from reactions.remove method */
export type ReactionsRemoveerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsRemoveErrorEnum;
  ok: boolean;
};

export const reactionsRemoveerrorschema1ErrorSchema: Schema<ReactionsRemoveerrorschema1Error> =
  s.object<ReactionsRemoveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsRemoveErrorEnumSchema,
    ok: s.boolean(),
  });
