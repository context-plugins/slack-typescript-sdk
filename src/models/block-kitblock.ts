import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BlockKitblock = {
  type: string;
};

export const blockKitblockSchema: Schema<BlockKitblock> = s.object<BlockKitblock>({
  type: s.string(),
});
