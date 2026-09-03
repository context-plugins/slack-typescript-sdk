import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Plan = {
  Std: "std",
  Plus: "plus",
  Compliance: "compliance",
  Enterprise: "enterprise",
} as const;
export type Plan = (typeof Plan)[keyof typeof Plan] | (string & {});

export const planSchema: EnumSchema<Plan> = s.enumOf<Plan>(Plan);
