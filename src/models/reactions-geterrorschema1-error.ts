import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsGetErrorEnumSchema, type ReactionsGetErrorEnum } from "./reactions-get-error-enum.js";

export type ReactionsGeterrorschema1Error = {
  callstack?: string;
  error: ReactionsGetErrorEnum;
  ok: "False";
};

export const reactionsGeterrorschema1ErrorSchema: Schema<ReactionsGeterrorschema1Error> =
  s.object<ReactionsGeterrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsGetErrorEnumSchema,
    ok: s.literal("False"),
  });
