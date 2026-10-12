import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndDndErrorEnumSchema, type DndEndDndErrorEnum } from "./dnd-end-dnd-error-enum.js";

/** Schema for error response from dnd.endDnd method */
export type DndEndDnderrorschema1 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndEndDndErrorEnum;
  ok: boolean;
};

export const dndEndDnderrorschema1Schema: Schema<DndEndDnderrorschema1> = s.object<DndEndDnderrorschema1>({
  callstack: s.optional(s.string()),
  error: dndEndDndErrorEnumSchema,
  ok: s.boolean(),
});
