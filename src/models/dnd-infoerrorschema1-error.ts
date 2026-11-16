import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dndInfoErrorEnumSchema, type DndInfoErrorEnum } from "./dnd-info-error-enum.js";

/** Schema for error response from dnd.info method */
export type DndInfoerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: DndInfoErrorEnum;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dndInfoerrorschema1ErrorSchema: Schema<DndInfoerrorschema1Error> =
  s.object<DndInfoerrorschema1Error>(
    {
      callstack: s.optional(s.string()),
      error: dndInfoErrorEnumSchema,
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
