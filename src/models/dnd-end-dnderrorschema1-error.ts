import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndDndErrorEnumSchema, type DndEndDndErrorEnum } from "./dnd-end-dnd-error-enum.js";

/** Schema for error response from dnd.endDnd method */
export type DndEndDnderrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndEndDndErrorEnum;
  ok: boolean;
};

export const dndEndDnderrorschema1ErrorSchema: Schema<DndEndDnderrorschema1Error> =
  s.object<DndEndDnderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dndEndDndErrorEnumSchema,
    ok: s.boolean(),
  });
