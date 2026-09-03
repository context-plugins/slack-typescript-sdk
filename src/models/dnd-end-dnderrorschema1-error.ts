import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dndEndDndErrorEnumSchema, type DndEndDndErrorEnum } from "./dnd-end-dnd-error-enum.js";

export type DndEndDnderrorschema1Error = {
  callstack?: string;
  error: DndEndDndErrorEnum;
  ok: "False";
};

export const dndEndDnderrorschema1ErrorSchema: Schema<DndEndDnderrorschema1Error> =
  s.object<DndEndDnderrorschema1Error>({
    callstack: s.optional(s.string()),
    error: dndEndDndErrorEnumSchema,
    ok: s.literal("False"),
  });
