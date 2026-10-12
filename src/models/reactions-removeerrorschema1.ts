import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  reactionsRemoveErrorEnumSchema,
  type ReactionsRemoveErrorEnum,
} from "./reactions-remove-error-enum.js";

/** Schema for error response from reactions.remove method */
export type ReactionsRemoveerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsRemoveErrorEnum;
  ok: boolean;
};

export const reactionsRemoveerrorschema1Schema: Schema<ReactionsRemoveerrorschema1> =
  s.object<ReactionsRemoveerrorschema1>({
    callstack: s.optional(s.string()),
    error: reactionsRemoveErrorEnumSchema,
    ok: s.boolean(),
  });
