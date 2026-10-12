import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from dnd.endDnd method */
export type DndEndDndschema = {
  ok: boolean;
};

export const dndEndDndschemaSchema: Schema<DndEndDndschema> = s.object<DndEndDndschema>({
  ok: s.boolean(),
});
