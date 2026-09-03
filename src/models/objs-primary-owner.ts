import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsPrimaryOwner = {
  email: string;
  id: string;
};

export const objsPrimaryOwnerSchema: Schema<ObjsPrimaryOwner> = s.object<ObjsPrimaryOwner>({
  email: s.string(),
  id: s.string(),
});
