import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconsSchema, type Icons } from "./icons.js";

export type Bot = {
  appId: string;
  deleted: boolean;
  icons: Icons;
  id: string;
  name: string;
  updated: number;
  userId?: string;
};

export const botSchema: Schema<Bot> = s.object<Bot>({
  appId: s.string(),
  deleted: s.boolean(),
  icons: iconsSchema,
  id: s.string(),
  name: s.string(),
  updated: s.number(),
  userId: s.optional(s.string()),
  _keysMap: {
    appId: "app_id",
    userId: "user_id",
  },
});
