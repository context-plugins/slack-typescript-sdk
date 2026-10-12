import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Purpose = {
  creator: string;
  lastSet: number;
  value: string;
};

export const purposeSchema: Schema<Purpose> = s.object<Purpose>({
  creator: s.string(),
  lastSet: s.int(),
  value: s.string(),
  _keysMap: {
    lastSet: "last_set",
  },
});
