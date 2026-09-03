import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObjsTeamProfileFieldOption = {
  isCustom?: boolean | null;
  isMultipleEntry?: boolean | null;
  isProtected?: boolean | null;
  isScim?: boolean | null;
};

export const objsTeamProfileFieldOptionSchema: Schema<ObjsTeamProfileFieldOption> =
  s.object<ObjsTeamProfileFieldOption>({
    isCustom: s.optionalNullable(s.boolean()),
    isMultipleEntry: s.optionalNullable(s.boolean()),
    isProtected: s.optionalNullable(s.boolean()),
    isScim: s.optionalNullable(s.boolean()),
    _keysMap: {
      isCustom: "is_custom",
      isMultipleEntry: "is_multiple_entry",
      isProtected: "is_protected",
      isScim: "is_scim",
    },
  });
