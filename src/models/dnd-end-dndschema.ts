import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.endDnd method */
export type DndEndDndschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dndEndDndschemaSchema: Schema<DndEndDndschema> = s.object<DndEndDndschema>(
  {
    ok: s.boolean(),
  },
  { additionalProperties: s.json() },
);
