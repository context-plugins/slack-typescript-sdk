import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndInfoErrorEnumSchema, type DndInfoErrorEnum } from "./dnd-info-error-enum.js";

export type DndInfoerrorschema1Error = {
  callstack?: string;
  error: DndInfoErrorEnum;
  ok: "False";
};

export const dndInfoerrorschema1ErrorSchema: Schema<DndInfoerrorschema1Error> =
  s.object<DndInfoerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dndInfoErrorEnumSchema,
    ok: s.literal("False"),
  });
