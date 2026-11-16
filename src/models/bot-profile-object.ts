import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconsSchema, type Icons } from "./icons.js";

export type BotProfileObject = {
  appId: string;
  deleted: boolean;
  icons: Icons;
  id: string;
  name: string;
  teamId: string;
  updated: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const botProfileObjectProperties: s.Shape<BotProfileObject> = {
  appId: s.string(),
  deleted: s.boolean(),
  icons: iconsSchema,
  id: s.string(),
  name: s.string(),
  teamId: s.string(),
  updated: s.int(),
  _keysMap: {
    appId: "app_id",
    teamId: "team_id",
  },
};

export const botProfileObjectInternalSchema: Schema<BotProfileObject> = s.object<BotProfileObject>(
  botProfileObjectProperties,
  { additionalProperties: s.json() },
);

export const botProfileObjectSchema: Schema<BotProfileObject> = s.lazySchema(() =>
  s.object<BotProfileObject>(
    {
      ...botProfileObjectProperties,
      appId: s.string().check(s.pattern("^A[A-Z0-9]{1,}$")),
      id: s.string().check(s.pattern("^B[A-Z0-9]{8,}$")),
      teamId: s.string().check(s.pattern("^[T][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
