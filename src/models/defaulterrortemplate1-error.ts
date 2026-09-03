import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Defaulterrortemplate1Error = {
  ok: "False";
};

export const defaulterrortemplate1ErrorSchema: Schema<Defaulterrortemplate1Error> =
  s.object<Defaulterrortemplate1Error>({
    ok: s.literal("False"),
  });
