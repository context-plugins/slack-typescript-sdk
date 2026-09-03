import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsListErrorEnumSchema, type PinsListErrorEnum } from "./pins-list-error-enum.js";

export type PinsListerrorschema1Error = {
  callstack?: string;
  error: PinsListErrorEnum;
  ok: "False";
};

export const pinsListerrorschema1ErrorSchema: Schema<PinsListerrorschema1Error> =
  s.object<PinsListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: pinsListErrorEnumSchema,
    ok: s.literal("False"),
  });
