import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { botProfileObjectSchema, type BotProfileObject } from "./bot-profile-object.js";

export type Message = {
  botId: string;
  botProfile?: BotProfileObject;
  team: string;
  text: string;
  type: string;
  user: string;
  username?: string;
};

export const messageSchema: Schema<Message> = s.object<Message>({
  botId: s.string(),
  botProfile: s.optional(s.lazy(() => botProfileObjectSchema)),
  team: s.string(),
  text: s.string(),
  type: s.string(),
  user: s.string(),
  username: s.optional(s.string()),
  _keysMap: {
    botId: "bot_id",
    botProfile: "bot_profile",
  },
});
