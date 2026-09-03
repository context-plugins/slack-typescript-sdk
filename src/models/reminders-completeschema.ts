import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemindersCompleteschema = {
  ok: "True";
};

export const remindersCompleteschemaSchema: Schema<RemindersCompleteschema> =
  s.object<RemindersCompleteschema>({
    ok: s.literal("True"),
  });
