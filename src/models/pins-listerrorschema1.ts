import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pinsListErrorEnumSchema, type PinsListErrorEnum } from "./pins-list-error-enum.js";

/** Schema for error response from pins.list method */
export type PinsListerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: PinsListErrorEnum;
  ok: boolean;
};

export const pinsListerrorschema1Schema: Schema<PinsListerrorschema1> = s.object<PinsListerrorschema1>({
  callstack: s.optional(s.string()),
  error: pinsListErrorEnumSchema,
  ok: s.boolean(),
});
