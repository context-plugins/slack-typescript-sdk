import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";
import { team1Schema, type Team1 } from "./team1.js";

/** Schema for successful response from rtm.connect method */
export type RtmConnectschema = {
  ok: boolean;
  self: Self;
  team: Team1;
  url: string;
};

export const rtmConnectschemaSchema: Schema<RtmConnectschema> = s.object<RtmConnectschema>({
  ok: s.boolean(),
  self: selfSchema,
  team: team1Schema,
  url: s.string(),
});
