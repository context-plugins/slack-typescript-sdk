import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Current = {
  dateStarted: number;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentSchema: Schema<Current> = s.object<Current>(
  {
    dateStarted: s.int(),
    teamId: s.string(),
    _keysMap: {
      dateStarted: "date_started",
      teamId: "team_id",
    },
  },
  { additionalProperties: s.json() },
);
