import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DialogOpenschema = {
  ok: "True";
};

export const dialogOpenschemaSchema: Schema<DialogOpenschema> = s.object<DialogOpenschema>({
  ok: s.literal("True"),
});
