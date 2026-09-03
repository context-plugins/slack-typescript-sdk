import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";
import { team1Schema, type Team1 } from "./team1.js";

export type RtmConnectschema = {
  ok: "True";
  self: Self;
  team: Team1;
  url: string;
};

export const rtmConnectschemaSchema: Schema<RtmConnectschema> = s.object<RtmConnectschema>({
  ok: s.literal("True"),
  self: selfSchema,
  team: team1Schema,
  url: s.string(),
});
