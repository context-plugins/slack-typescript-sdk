import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconsSchema, type Icons } from "./icons.js";

export type BotProfileObject = {
  appId: string;
  deleted: boolean;
  icons: Icons;
  id: string;
  name: string;
  teamId: string;
  updated: number;
};

export const botProfileObjectSchema: Schema<BotProfileObject> = s.object<BotProfileObject>({
  appId: s.string(),
  deleted: s.boolean(),
  icons: iconsSchema,
  id: s.string(),
  name: s.string(),
  teamId: s.string(),
  updated: s.number(),
  _keysMap: {
    appId: "app_id",
    teamId: "team_id",
  },
});
