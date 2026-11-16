import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { selfInternalSchema, selfSchema, type Self } from "./self.js";
import { team1InternalSchema, team1Schema, type Team1 } from "./team1.js";

/** Schema for successful response from rtm.connect method */
export type RtmConnectschema = {
  ok: boolean;
  self: Self;
  team: Team1;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rtmConnectschemaProperties: s.Shape<RtmConnectschema> = {
  ok: s.boolean(),
  self: selfInternalSchema,
  team: team1InternalSchema,
  url: s.string(),
};

export const rtmConnectschemaInternalSchema: Schema<RtmConnectschema> = s.object<RtmConnectschema>(
  rtmConnectschemaProperties,
  { additionalProperties: s.json() },
);

export const rtmConnectschemaSchema: Schema<RtmConnectschema> = s.lazySchema(() =>
  s.object<RtmConnectschema>(
    {
      ...rtmConnectschemaProperties,
      self: selfSchema,
      team: team1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
