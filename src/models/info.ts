import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appHomeSchema, type AppHome } from "./app-home.js";
import { channelSchema, type Channel } from "./channel.js";
import { groupSchema, type Group } from "./group.js";
import { imSchema, type Im } from "./im.js";
import { mpimSchema, type Mpim } from "./mpim.js";
import { teamSchema, type Team } from "./team.js";

export type Info = {
  appHome: AppHome;
  channel: Channel;
  group: Group;
  im: Im;
  mpim: Mpim;
  team: Team;
};

export const infoSchema: Schema<Info> = s.object<Info>({
  appHome: appHomeSchema,
  channel: channelSchema,
  group: groupSchema,
  im: imSchema,
  mpim: mpimSchema,
  team: teamSchema,
  _keysMap: {
    appHome: "app_home",
  },
});
