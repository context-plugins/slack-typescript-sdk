import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Prefs = {
  channels: string[];
  groups: string[];
};

export const prefsSchema: Schema<Prefs> = s.object<Prefs>({
  channels: s.array(s.string()),
  groups: s.array(s.string()),
});
