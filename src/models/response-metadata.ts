import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseMetadata = {
  nextCursor: string;
};

export const responseMetadataSchema: Schema<ResponseMetadata> = s.object<ResponseMetadata>({
  nextCursor: s.string(),
  _keysMap: {
    nextCursor: "next_cursor",
  },
});
