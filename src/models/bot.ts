import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconsSchema, type Icons } from "./icons.js";

export type Bot = {
  appId: string;
  deleted: boolean;
  icons: Icons;
  id: string;
  name: string;
  updated: number;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const botProperties: s.Shape<Bot> = {
  appId: s.string(),
  deleted: s.boolean(),
  icons: iconsSchema,
  id: s.string(),
  name: s.string(),
  updated: s.int(),
  userId: s.optional(s.string()),
  _keysMap: {
    appId: "app_id",
    userId: "user_id",
  },
};

export const botInternalSchema: Schema<Bot> = s.object<Bot>(botProperties, {
  additionalProperties: s.json(),
});

export const botSchema: Schema<Bot> = s.lazySchema(() =>
  s.object<Bot>(
    {
      ...botProperties,
      appId: s.string().check(s.pattern("^A[A-Z0-9]{1,}$")),
      id: s.string().check(s.pattern("^B[A-Z0-9]{8,}$")),
      userId: s.optional(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
