import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const objsTeamProfileFieldProperties: s.Shape<ObjsTeamProfileField> = {
  fieldName: s.optionalNullable(s.string()),
  hint: s.string(),
  id: s.string(),
  isHidden: s.optional(s.boolean()),
  label: s.string(),
  options: s.optional(s.record(s.string(), s.unknown())),
  ordering: s.float64(),
  possibleValues: s.optionalNullable(s.array(s.string())),
  type: typeSchema,
  _keysMap: {
    fieldName: "field_name",
    isHidden: "is_hidden",
    possibleValues: "possible_values",
  },
};

export const objsTeamProfileFieldInternalSchema: Schema<ObjsTeamProfileField> =
  s.object<ObjsTeamProfileField>(objsTeamProfileFieldProperties, { additionalProperties: s.json() });

export const objsTeamProfileFieldSchema: Schema<ObjsTeamProfileField> = s.lazySchema(() =>
  s.object<ObjsTeamProfileField>(
    {
      ...objsTeamProfileFieldProperties,
      id: s.string().check(s.pattern("^X[a-zA-Z0-9]{9,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
