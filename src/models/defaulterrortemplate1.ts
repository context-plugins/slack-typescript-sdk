import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Defaulterrortemplate1 = {
  ok: "False";
};

export const defaulterrortemplate1Schema: Schema<Defaulterrortemplate1> = s.object<Defaulterrortemplate1>({
  ok: s.literal("False"),
});
