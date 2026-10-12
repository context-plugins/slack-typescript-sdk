import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndInfoErrorEnumSchema, type DndInfoErrorEnum } from "./dnd-info-error-enum.js";

/** Schema for error response from dnd.info method */
export type DndInfoerrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndInfoErrorEnum;
  ok: boolean;
};

export const dndInfoerrorschema1Schema: Schema<DndInfoerrorschema1> = s.object<DndInfoerrorschema1>({
  callstack: s.optional(s.string()),
  error: dndInfoErrorEnumSchema,
  ok: s.boolean(),
});
