import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  reactionsRemoveErrorEnumSchema,
  type ReactionsRemoveErrorEnum,
} from "./reactions-remove-error-enum.js";

export type ReactionsRemoveerrorschema1 = {
  callstack?: string;
  error: ReactionsRemoveErrorEnum;
  ok: "False";
};

export const reactionsRemoveerrorschema1Schema: Schema<ReactionsRemoveerrorschema1> =
  s.object<ReactionsRemoveerrorschema1>({
    callstack: s.optional(s.string()),
    error: reactionsRemoveErrorEnumSchema,
    ok: s.literal("False"),
  });
