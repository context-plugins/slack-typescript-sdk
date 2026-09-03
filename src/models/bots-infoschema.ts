import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botSchema, type Bot } from "./bot.js";

export type BotsInfoschema = {
  bot: Bot;
  ok: "True";
};

export const botsInfoschemaSchema: Schema<BotsInfoschema> = s.object<BotsInfoschema>({
  bot: botSchema,
  ok: s.literal("True"),
});
