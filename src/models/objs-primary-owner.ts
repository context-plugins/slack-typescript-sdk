import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObjsPrimaryOwner = {
  email: string;
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objsPrimaryOwnerSchema: Schema<ObjsPrimaryOwner> = s.object<ObjsPrimaryOwner>(
  {
    email: s.string(),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
