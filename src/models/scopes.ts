import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Scopes = {
  appHome?: string[];
  channel?: string[];
  group?: string[];
  im?: string[];
  mpim?: string[];
  team?: string[];
  user?: string[];
};

export const scopesSchema: Schema<Scopes> = s.object<Scopes>({
  appHome: s.optional(s.array(s.string())),
  channel: s.optional(s.array(s.string())),
  group: s.optional(s.array(s.string())),
  im: s.optional(s.array(s.string())),
  mpim: s.optional(s.array(s.string())),
  team: s.optional(s.array(s.string())),
  user: s.optional(s.array(s.string())),
  _keysMap: {
    appHome: "app_home",
  },
});
