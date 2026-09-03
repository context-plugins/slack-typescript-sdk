import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Topic = {
  creator: string;
  lastSet: number;
  value: string;
};

export const topicSchema: Schema<Topic> = s.object<Topic>({
  creator: s.string(),
  lastSet: s.number(),
  value: s.string(),
  _keysMap: {
    lastSet: "last_set",
  },
});
