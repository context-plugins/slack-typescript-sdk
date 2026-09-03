import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team1 = {
  domain: string;
  id: string;
  name: string;
};

export const team1Schema: Schema<Team1> = s.object<Team1>({
  domain: s.string(),
  id: s.string(),
  name: s.string(),
});
