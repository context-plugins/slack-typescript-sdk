import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndInfoErrorEnumSchema, type DndInfoErrorEnum } from "./dnd-info-error-enum.js";

export type DndInfoerrorschema1 = {
  callstack?: string;
  error: DndInfoErrorEnum;
  ok: "False";
};

export const dndInfoerrorschema1Schema: Schema<DndInfoerrorschema1> = s.object<DndInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: dndInfoErrorEnumSchema,
  ok: s.literal("False"),
});
