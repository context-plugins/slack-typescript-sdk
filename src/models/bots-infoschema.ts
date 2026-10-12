import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botSchema, type Bot } from "./bot.js";

/** Schema for successful response from bots.info method */
export type BotsInfoschema = {
  bot: Bot;
  ok: boolean;
};

export const botsInfoschemaSchema: Schema<BotsInfoschema> = s.object<BotsInfoschema>({
  bot: botSchema,
  ok: s.boolean(),
});
