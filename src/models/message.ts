import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botProfileObjectInternalSchema,
  botProfileObjectSchema,
  type BotProfileObject,
} from "./bot-profile-object.js";

export type Message = {
  botId: string;
  botProfile?: BotProfileObject;
  team: string;
  text: string;
  type: string;
  user: string;
  username?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messageProperties: s.Shape<Message> = {
  botId: s.string(),
  botProfile: s.optional(s.lazy(() => botProfileObjectInternalSchema)),
  team: s.string(),
  text: s.string(),
  type: s.string(),
  user: s.string(),
  username: s.optional(s.string()),
  _keysMap: {
    botId: "bot_id",
    botProfile: "bot_profile",
  },
};

export const messageInternalSchema: Schema<Message> = s.object<Message>(messageProperties, {
  additionalProperties: s.json(),
});

export const messageSchema: Schema<Message> = s.lazySchema(() =>
  s.object<Message>(
    {
      ...messageProperties,
      botId: s.string().check(s.pattern("^B[A-Z0-9]{8,}$")),
      botProfile: s.optional(s.lazy(() => botProfileObjectSchema)),
      team: s.string().check(s.pattern("^[T][A-Z0-9]{2,}$")),
      user: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
