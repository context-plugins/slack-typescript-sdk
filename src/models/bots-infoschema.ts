import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botInternalSchema, botSchema, type Bot } from "./bot.js";

/** Schema for successful response from bots.info method */
export type BotsInfoschema = {
  bot: Bot;
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const botsInfoschemaProperties: s.Shape<BotsInfoschema> = {
  bot: botInternalSchema,
  ok: s.boolean(),
};

export const botsInfoschemaInternalSchema: Schema<BotsInfoschema> = s.object<BotsInfoschema>(
  botsInfoschemaProperties,
  { additionalProperties: s.json() },
);

export const botsInfoschemaSchema: Schema<BotsInfoschema> = s.lazySchema(() =>
  s.object<BotsInfoschema>(
    {
      ...botsInfoschemaProperties,
      bot: botSchema,
    },
    { additionalProperties: s.json() },
  ),
);
