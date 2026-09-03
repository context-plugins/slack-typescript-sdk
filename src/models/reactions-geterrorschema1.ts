import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsGetErrorEnumSchema, type ReactionsGetErrorEnum } from "./reactions-get-error-enum.js";

export type ReactionsGeterrorschema1 = {
  callstack?: string;
  error: ReactionsGetErrorEnum;
  ok: "False";
};

export const reactionsGeterrorschema1Schema: Schema<ReactionsGeterrorschema1> =
  s.object<ReactionsGeterrorschema1>({
    callstack: s.optional(s.string()),
    error: reactionsGetErrorEnumSchema,
    ok: s.literal("False"),
  });
