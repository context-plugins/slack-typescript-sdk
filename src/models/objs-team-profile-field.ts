import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type ObjsTeamProfileField = {
  fieldName?: string | null;
  hint: string;
  id: string;
  isHidden?: boolean;
  label: string;
  options?: Record<string, unknown>;
  ordering: number;
  possibleValues?: string[] | null;
  type: Type;
};

export const objsTeamProfileFieldSchema: Schema<ObjsTeamProfileField> = s.object<ObjsTeamProfileField>({
  fieldName: s.optionalNullable(s.string()),
  hint: s.string(),
  id: s.string(),
  isHidden: s.optional(s.boolean()),
  label: s.string(),
  options: s.optional(s.record(s.string(), s.unknown())),
  ordering: s.number(),
  possibleValues: s.optionalNullable(s.array(s.string())),
  type: typeSchema,
  _keysMap: {
    fieldName: "field_name",
    isHidden: "is_hidden",
    possibleValues: "possible_values",
  },
});
