import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BlockKitblock = {
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const blockKitblockSchema: Schema<BlockKitblock> = s.object<BlockKitblock>(
  {
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
