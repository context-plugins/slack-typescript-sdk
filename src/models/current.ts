import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Current = {
  dateStarted: number;
  teamId: string;
};

export const currentSchema: Schema<Current> = s.object<Current>({
  dateStarted: s.int(),
  teamId: s.string(),
  _keysMap: {
    dateStarted: "date_started",
    teamId: "team_id",
  },
});
