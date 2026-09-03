import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  reactionsRemoveErrorEnumSchema,
  type ReactionsRemoveErrorEnum,
} from "./reactions-remove-error-enum.js";

export type ReactionsRemoveerrorschema1Error = {
  callstack?: string;
  error: ReactionsRemoveErrorEnum;
  ok: "False";
};

export const reactionsRemoveerrorschema1ErrorSchema: Schema<ReactionsRemoveerrorschema1Error> =
  s.object<ReactionsRemoveerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsRemoveErrorEnumSchema,
    ok: s.literal("False"),
  });
