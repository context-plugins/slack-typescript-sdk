import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemindersDeleteschema = {
  ok: "True";
};

export const remindersDeleteschemaSchema: Schema<RemindersDeleteschema> = s.object<RemindersDeleteschema>({
  ok: s.literal("True"),
});
