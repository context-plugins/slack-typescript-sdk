import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Schema for successful response from dialog.open method */
export type DialogOpenschema = {
  ok: boolean;
};

export const dialogOpenschemaSchema: Schema<DialogOpenschema> = s.object<DialogOpenschema>({
  ok: s.boolean(),
});
