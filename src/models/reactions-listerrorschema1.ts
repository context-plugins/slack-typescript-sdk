import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsListErrorEnumSchema, type ReactionsListErrorEnum } from "./reactions-list-error-enum.js";

export type ReactionsListerrorschema1 = {
  callstack?: string;
  error: ReactionsListErrorEnum;
  ok: "False";
};

export const reactionsListerrorschema1Schema: Schema<ReactionsListerrorschema1> =
  s.object<ReactionsListerrorschema1>({
    callstack: s.optional(s.string()),
    error: reactionsListErrorEnumSchema,
    ok: s.literal("False"),
  });
