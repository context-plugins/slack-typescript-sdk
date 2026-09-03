import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsListErrorEnumSchema, type PinsListErrorEnum } from "./pins-list-error-enum.js";

export type PinsListerrorschema1 = {
  callstack?: string;
  error: PinsListErrorEnum;
  ok: "False";
};

export const pinsListerrorschema1Schema: Schema<PinsListerrorschema1> = s.object<PinsListerrorschema1>({
  callstack: s.optional(s.string()),
  error: pinsListErrorEnumSchema,
  ok: s.literal("False"),
});
